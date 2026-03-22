import { act, render, screen } from '@testing-library/react';

import { homePageContent } from '../content/homePageContent';
import { ShowcaseSection } from './ShowcaseSection';

class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = [];

  callback: IntersectionObserverCallback;

  observedElements = new Set<Element>();

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
    MockIntersectionObserver.instances.push(this);
  }

  observe = (element: Element) => {
    this.observedElements.add(element);
  };

  unobserve = (element: Element) => {
    this.observedElements.delete(element);
  };

  disconnect = () => {
    this.observedElements.clear();
  };

  trigger(isIntersecting: boolean) {
    const entries = [...this.observedElements].map(
      (target) =>
        ({
          isIntersecting,
          target,
          intersectionRatio: isIntersecting ? 1 : 0,
        }) as IntersectionObserverEntry,
    );

    this.callback(entries, this as unknown as IntersectionObserver);
  }
}

function getLatestObserver() {
  const latestObserver = MockIntersectionObserver.instances.at(-1);

  if (!latestObserver) {
    throw new Error('Expected an IntersectionObserver instance to exist.');
  }

  return latestObserver;
}

function advanceToNextMessage() {
  act(() => {
    vi.advanceTimersByTime(700);
  });
}

function advanceToNextTypingBeat() {
  act(() => {
    vi.advanceTimersByTime(260);
  });
}

describe('ShowcaseSection', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    MockIntersectionObserver.instances = [];
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it('animates the phone thread one bubble at a time while the phone is in view', () => {
    const { container } = render(<ShowcaseSection content={homePageContent.showcase} />);

    expect(screen.getByTestId('showcase-stage-viewport')).toBeInTheDocument();
    expect(screen.getByTestId('showcase-stage')).toBeInTheDocument();
    expect(screen.getByText(/in your messages/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /go back/i })).toBeInTheDocument();
    expect(screen.getByText(/^maon$/i)).toBeInTheDocument();

    const observer = getLatestObserver();

    expect(container.querySelectorAll('[data-variant]')).toHaveLength(0);
    expect(container.querySelectorAll('[class*="typingDot"]')).toHaveLength(0);

    act(() => {
      observer.trigger(true);
    });

    let typingIndicator = container.querySelector('[data-sender]');
    expect(typingIndicator).toHaveAttribute('data-sender', 'maon');
    expect(container.querySelectorAll('[class*="typingDotIncoming"]')).toHaveLength(3);
    expect(container.querySelectorAll('[class*="typingDotOutgoing"]')).toHaveLength(0);

    advanceToNextMessage();

    let messageElements = container.querySelectorAll('[data-variant]');
    expect(messageElements).toHaveLength(1);
    expect(messageElements[0]).toHaveTextContent('what should i call you?');
    expect(messageElements[0]).toHaveAttribute('data-variant', 'incoming-short');

    advanceToNextTypingBeat();

    typingIndicator = container.querySelector('[data-sender]');
    expect(typingIndicator).toHaveAttribute('data-sender', 'user');
    expect(container.querySelectorAll('[class*="typingDotIncoming"]')).toHaveLength(0);
    expect(container.querySelectorAll('[class*="typingDotOutgoing"]')).toHaveLength(3);

    for (let index = 1; index < homePageContent.showcase.messages.length; index += 1) {
      advanceToNextMessage();

      if (index < homePageContent.showcase.messages.length - 1) {
        advanceToNextTypingBeat();
      }
    }

    messageElements = container.querySelectorAll('[data-variant]');
    expect(messageElements).toHaveLength(6);
    expect(messageElements[1]).toHaveTextContent('hey im user.');
    expect(messageElements[1]).toHaveAttribute('data-variant', 'outgoing-short');
    expect(messageElements[2]).toHaveTextContent(
      'hi user, should we start with what keeps you steady or what tends to throw you off?',
    );
    expect(messageElements[2]).toHaveAttribute('data-variant', 'incoming-tall');
    expect(messageElements[3]).toHaveTextContent(/uhhhh i (do not|don't) catch it fast/i);
    expect(messageElements[3]).toHaveAttribute('data-variant', 'outgoing-medium');
    expect(messageElements[4]).toHaveTextContent(
      'what usually pulls you off track first: stress, your phone, or something else?',
    );
    expect(messageElements[4]).toHaveAttribute('data-variant', 'incoming-question');
    expect(messageElements[5]).toHaveTextContent(
      'late scrolling and bad sleep usually do it. by the time i notice, everything feels harder',
    );
    expect(messageElements[5]).toHaveAttribute('data-variant', 'outgoing-large');
    expect(container.querySelectorAll('[data-sender]')).toHaveLength(0);
  });

  it('resets the phone thread when it leaves view and restarts on re-entry', () => {
    const { container } = render(<ShowcaseSection content={homePageContent.showcase} />);

    const observer = getLatestObserver();

    act(() => {
      observer.trigger(true);
    });

    advanceToNextMessage();
    advanceToNextTypingBeat();
    advanceToNextMessage();

    expect(container.querySelectorAll('[data-variant]')).toHaveLength(2);

    act(() => {
      observer.trigger(false);
    });

    expect(container.querySelectorAll('[data-variant]')).toHaveLength(0);
    expect(container.querySelectorAll('[class*="typingDot"]')).toHaveLength(0);

    act(() => {
      observer.trigger(true);
    });

    const typingIndicator = container.querySelector('[data-sender]');
    expect(typingIndicator).toHaveAttribute('data-sender', 'maon');

    advanceToNextMessage();

    const restartedMessages = container.querySelectorAll('[data-variant]');
    expect(restartedMessages).toHaveLength(1);
    expect(restartedMessages[0]).toHaveTextContent('what should i call you?');
  });

  it('renders the history stack with featured metadata and compact trailing cards', () => {
    const { container } = render(<ShowcaseSection content={homePageContent.showcase} />);

    expect(screen.getByText(/recent support/i)).toBeInTheDocument();
    expect(screen.getByText(/^screen time reset$/i)).toBeInTheDocument();
    expect(screen.getByText(/30 min social app limit to break the scroll loop/i)).toBeInTheDocument();
    expect(screen.getByText(/sat - 7:15 pm/i)).toBeInTheDocument();
    expect(screen.getByText(/ends in:/i)).toBeInTheDocument();
    expect(screen.getByText(/25 min/i)).toBeInTheDocument();
    expect(screen.getByText(/apps blocked:/i)).toBeInTheDocument();

    expect(screen.getByText(/breathing reset/i)).toBeInTheDocument();
    expect(screen.getByText(/walk @ 7 pm monday/i)).toBeInTheDocument();
    expect(screen.getByText(/alarm @ 9:30 am sunday/i)).toBeInTheDocument();
    expect(screen.queryByText(/see more/i)).not.toBeInTheDocument();

    expect(screen.getByRole('img', { name: 'Instagram' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'TikTok' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Reddit' })).toBeInTheDocument();
    expect(container.querySelectorAll('.appIcons img, [class*="appIcons"] img')).toHaveLength(3);
  });

  it('renders the stories cards with figma metric copy and numbered badges', () => {
    const { container } = render(<ShowcaseSection content={homePageContent.showcase} />);

    expect(screen.getByText(/^patterns$/i)).toBeInTheDocument();
    expect(screen.getByText(/^EARLY SHIFT$/)).toBeInTheDocument();
    expect(screen.getByText(/^2h$/)).toBeInTheDocument();
    expect(
      screen.getByText(/your signals often start changing before the spiral feels obvious/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/^PROGRESS$/)).toBeInTheDocument();
    expect(screen.getByText(/^18%$/)).toBeInTheDocument();
    expect(screen.getByText(/less stress this week when late-night scrolling dropped/i)).toBeInTheDocument();

    const badges = container.querySelectorAll('[class*="metricBadge"] span');
    expect(badges).toHaveLength(2);
    expect(badges[0]).toHaveTextContent('3');
    expect(badges[1]).toHaveTextContent('4');
    expect(container.querySelectorAll('[class*="metricCircle"]')).toHaveLength(2);
  });
});
