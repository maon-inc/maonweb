import { render, screen } from '@testing-library/react';

import { homePageContent } from '../content/homePageContent';
import { ShowcaseSection } from './ShowcaseSection';

describe('ShowcaseSection', () => {
  it('renders the figma phone thread in order with header and typing indicator', () => {
    const { container } = render(<ShowcaseSection content={homePageContent.showcase} />);

    expect(screen.getByText(/in your messages/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /go back/i })).toBeInTheDocument();
    expect(screen.getByText(/^maon$/i)).toBeInTheDocument();

    const messageElements = container.querySelectorAll('[data-variant]');

    expect(messageElements).toHaveLength(6);
    expect(messageElements[0]).toHaveTextContent('what should i call you?');
    expect(messageElements[0]).toHaveAttribute('data-variant', 'incoming-short');
    expect(messageElements[1]).toHaveTextContent('hey im user.');
    expect(messageElements[1]).toHaveAttribute('data-variant', 'outgoing-short');
    expect(messageElements[2]).toHaveTextContent(
      'hi user, want to hear about me, or should we start with you?',
    );
    expect(messageElements[2]).toHaveAttribute('data-variant', 'incoming-tall');
    expect(messageElements[3]).toHaveTextContent('ik you step in right away');
    expect(messageElements[3]).toHaveAttribute('data-variant', 'outgoing-medium');
    expect(messageElements[4]).toHaveTextContent(
      'when you start slipping do you notice it? or does it hit you later?',
    );
    expect(messageElements[4]).toHaveAttribute('data-variant', 'incoming-question');
    expect(messageElements[5]).toHaveTextContent(
      'i don’t notice it until it gets really bad and then i start spiraling',
    );
    expect(messageElements[5]).toHaveAttribute('data-variant', 'outgoing-large');

    expect(container.querySelectorAll('[class*="typingDot"]')).toHaveLength(3);
  });

  it('renders the history stack with featured metadata and compact trailing cards', () => {
    const { container } = render(<ShowcaseSection content={homePageContent.showcase} />);

    expect(screen.getByText(/interventions history/i)).toBeInTheDocument();
    expect(screen.getByText(/^screen time$/i)).toBeInTheDocument();
    expect(screen.getByText(/30 min limit on social media/i)).toBeInTheDocument();
    expect(screen.getByText(/sat - 7:15 pm/i)).toBeInTheDocument();
    expect(screen.getByText(/ends in:/i)).toBeInTheDocument();
    expect(screen.getByText(/25 min/i)).toBeInTheDocument();
    expect(screen.getByText(/apps blocked:/i)).toBeInTheDocument();

    expect(screen.getByText(/breathing exercise/i)).toBeInTheDocument();
    expect(screen.getByText(/workout @ 7 pm monday/i)).toBeInTheDocument();
    expect(screen.getByText(/alarm @ 9:30 am sunday/i)).toBeInTheDocument();
    expect(screen.queryByText(/see more/i)).not.toBeInTheDocument();

    expect(container.querySelectorAll('[class*="appIconInstagram"]')).not.toHaveLength(0);
    expect(container.querySelectorAll('[class*="appIconTiktok"]')).not.toHaveLength(0);
    expect(container.querySelectorAll('[class*="appIconReddit"]')).not.toHaveLength(0);
  });

  it('renders the stories cards with figma metric copy and numbered badges', () => {
    const { container } = render(<ShowcaseSection content={homePageContent.showcase} />);

    expect(screen.getByText(/^stories$/i)).toBeInTheDocument();
    expect(screen.getByText(/^EARLY SPIRAL$/)).toBeInTheDocument();
    expect(screen.getByText(/^2h$/)).toBeInTheDocument();
    expect(screen.getByText(/before a spiral, your body lets us know/i)).toBeInTheDocument();
    expect(screen.getByText(/^PROGRESS$/)).toBeInTheDocument();
    expect(screen.getByText(/^18%$/)).toBeInTheDocument();
    expect(screen.getByText(/less destress over the past week/i)).toBeInTheDocument();

    const badges = container.querySelectorAll('[class*="metricBadge"] span');
    expect(badges).toHaveLength(2);
    expect(badges[0]).toHaveTextContent('3');
    expect(badges[1]).toHaveTextContent('4');
    expect(container.querySelectorAll('[class*="metricCircle"]')).toHaveLength(2);
  });
});
