import { act, render, screen } from '@testing-library/react';

import { homePageContent } from '../content/homePageContent';
import {
  getNarrativeActiveIndex,
  getNarrativeLineVisualState,
  getNarrativeScrollOffset,
  getNarrativeTrackStepCount,
  NarrativeSection,
  shouldAnimateNarrative,
} from './NarrativeSection';

function createMatchMedia(matches: boolean) {
  return vi.fn().mockImplementation((query: string) => ({
    matches,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

describe('NarrativeSection', () => {
  const defaultRect = {
    x: 0,
    y: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
    toJSON: () => ({}),
  } as DOMRect;

  let sectionRect: DOMRect;
  let trackRect: DOMRect;

  beforeEach(() => {
    vi.useFakeTimers();

    sectionRect = {
      x: 0,
      y: 500,
      top: 500,
      left: 0,
      bottom: 5500,
      right: 730,
      width: 730,
      height: 5000,
      toJSON: () => ({}),
    } as DOMRect;
    trackRect = sectionRect;

    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      writable: true,
      value: 800,
    });
    Object.defineProperty(window, 'innerHeight', {
      configurable: true,
      writable: true,
      value: 1000,
    });
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      writable: true,
      value: createMatchMedia(false),
    });

    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback: FrameRequestCallback) => {
      return window.setTimeout(() => callback(0), 0) as unknown as number;
    });
    vi.spyOn(window, 'cancelAnimationFrame').mockImplementation((id: number) => {
      window.clearTimeout(id);
    });
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function (
      this: HTMLElement,
    ) {
      if (this.getAttribute('data-testid') === 'narrative-track') {
        return trackRect;
      }

      if (this.getAttribute('data-testid') === 'narrative-section') {
        return sectionRect;
      }

      return defaultRect;
    });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('renders all four narrative lines', () => {
    render(<NarrativeSection content={homePageContent.narrative} />);

    act(() => {
      vi.runOnlyPendingTimers();
    });

    expect(screen.getByText(/we understand/i)).toBeInTheDocument();
    expect(
      screen.getByText(/small things build up until everything feels like too much/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/most support only shows up after you're already overwhelmed/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/but maon notices the shift earlier because your body knows before you do/i),
    ).toBeInTheDocument();
  });

  it('uses the static readable fallback for reduced motion', () => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      writable: true,
      value: 1400,
    });
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      writable: true,
      value: createMatchMedia(true),
    });

    render(<NarrativeSection content={homePageContent.narrative} />);

    const section = screen.getByTestId('narrative-section');
    const track = screen.getByTestId('narrative-track');
    const viewport = screen.getByTestId('narrative-viewport');
    const firstMainLine = screen.getByText(
      /small things build up until everything feels like too much/i,
    );
    const introLine = screen.getByText(/we understand/i);

    expect(section).toHaveAttribute('data-animated', 'false');
    expect(track).toBeInTheDocument();
    expect(viewport).toBeInTheDocument();
    expect(firstMainLine).toHaveAttribute('data-active', 'true');
    expect(introLine).toHaveAttribute('data-active', 'false');
    expect(firstMainLine).toHaveAttribute('data-visual-state', 'static');
    expect(introLine).toHaveAttribute('data-visual-state', 'static');
  });

  it('animates on phone widths and keeps the centered progression', () => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      writable: true,
      value: 390,
    });

    render(<NarrativeSection content={homePageContent.narrative} />);

    const section = screen.getByTestId('narrative-section');
    const track = screen.getByTestId('narrative-track');
    const introLine = screen.getByText(/we understand/i);
    const firstMainLine = screen.getByText(
      /small things build up until everything feels like too much/i,
    );
    const secondLine = screen.getByText(
      /most support only shows up after you're already overwhelmed/i,
    );

    act(() => {
      vi.runOnlyPendingTimers();
    });

    expect(section).toHaveAttribute('data-animated', 'true');
    expect(track).toHaveStyle('--narrative-track-step-count: 5');
    expect(introLine).toHaveAttribute('data-visual-state', 'active');
    expect(firstMainLine).toHaveAttribute('data-visual-state', 'next');

    trackRect = {
      ...trackRect,
      top: -1200,
      y: -1200,
      bottom: 3800,
    } as DOMRect;

    act(() => {
      window.dispatchEvent(new Event('scroll'));
      vi.runOnlyPendingTimers();
    });

    expect(introLine).toHaveAttribute('data-visual-state', 'previous');
    expect(firstMainLine).toHaveAttribute('data-visual-state', 'active');
    expect(secondLine).toHaveAttribute('data-visual-state', 'next');

    trackRect = {
      ...trackRect,
      top: -3300,
      y: -3300,
      bottom: 1700,
    } as DOMRect;

    act(() => {
      window.dispatchEvent(new Event('scroll'));
      vi.runOnlyPendingTimers();
    });

    const finalLine = screen.getByText(
      /but maon notices the shift earlier because your body knows before you do/i,
    );

    expect(finalLine).toHaveAttribute('data-visual-state', 'active');

    trackRect = {
      ...trackRect,
      top: -4200,
      y: -4200,
      bottom: 800,
    } as DOMRect;

    act(() => {
      window.dispatchEvent(new Event('scroll'));
      vi.runOnlyPendingTimers();
    });

    expect(finalLine).toHaveAttribute('data-visual-state', 'active');
  });

  it('animates on desktop and advances active lines through sticky step bands', async () => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      writable: true,
      value: 1400,
    });

    render(<NarrativeSection content={homePageContent.narrative} />);

    const section = screen.getByTestId('narrative-section');
    const track = screen.getByTestId('narrative-track');
    const viewport = screen.getByTestId('narrative-viewport');
    const introLine = screen.getByText(/we understand/i);
    const firstMainLine = screen.getByText(
      /small things build up until everything feels like too much/i,
    );
    const secondLine = screen.getByText(
      /most support only shows up after you're already overwhelmed/i,
    );
    const finalLine = screen.getByText(
      /but maon notices the shift earlier because your body knows before you do/i,
    );

    act(() => {
      vi.runOnlyPendingTimers();
    });

    expect(section).toHaveAttribute('data-animated', 'true');
    expect(track).toContainElement(viewport);
    expect(viewport.querySelector('.homeContainer')).toBeTruthy();
    expect(introLine).toHaveAttribute('data-active', 'true');
    expect(introLine).toHaveAttribute('data-visual-state', 'active');
    expect(firstMainLine).toHaveAttribute('data-visual-state', 'next');
    expect(secondLine).toHaveAttribute('data-visual-state', 'hidden-below');

    trackRect = {
      ...trackRect,
      top: -1200,
      y: -1200,
      bottom: 3800,
    } as DOMRect;
    act(() => {
      window.dispatchEvent(new Event('scroll'));
      vi.runOnlyPendingTimers();
    });

    expect(firstMainLine).toHaveAttribute('data-active', 'true');
    expect(introLine).toHaveAttribute('data-visual-state', 'previous');
    expect(firstMainLine).toHaveAttribute('data-visual-state', 'active');
    expect(secondLine).toHaveAttribute('data-visual-state', 'next');
    expect(finalLine).toHaveAttribute('data-visual-state', 'hidden-below');

    trackRect = {
      ...trackRect,
      top: -2300,
      y: -2300,
      bottom: 2700,
    } as DOMRect;
    act(() => {
      window.dispatchEvent(new Event('scroll'));
      vi.runOnlyPendingTimers();
    });

    expect(secondLine).toHaveAttribute('data-active', 'true');
    expect(firstMainLine).toHaveAttribute('data-visual-state', 'previous');
    expect(secondLine).toHaveAttribute('data-visual-state', 'active');
    expect(finalLine).toHaveAttribute('data-visual-state', 'next');

    trackRect = {
      ...trackRect,
      top: -3300,
      y: -3300,
      bottom: 1700,
    } as DOMRect;
    act(() => {
      window.dispatchEvent(new Event('scroll'));
      vi.runOnlyPendingTimers();
    });

    expect(finalLine).toHaveAttribute('data-active', 'true');
    expect(secondLine).toHaveAttribute('data-visual-state', 'previous');
    expect(finalLine).toHaveAttribute('data-visual-state', 'active');
    expect(introLine).toHaveAttribute('data-visual-state', 'hidden-above');

    trackRect = {
      ...trackRect,
      top: -4600,
      y: -4600,
      bottom: 400,
    } as DOMRect;
    act(() => {
      window.dispatchEvent(new Event('scroll'));
      vi.runOnlyPendingTimers();
    });

    expect(finalLine).toHaveAttribute('data-active', 'true');
    expect(finalLine).toHaveAttribute('data-visual-state', 'active');
  });

  it('maps progress and animation eligibility deterministically', () => {
    expect(getNarrativeScrollOffset(300, 1000, 4)).toBe(0);
    expect(getNarrativeScrollOffset(-1200, 1000, 4)).toBe(1200);
    expect(getNarrativeScrollOffset(-4700, 1000, 4)).toBe(3999);
    expect(getNarrativeActiveIndex(0, 1000, 4)).toBe(0);
    expect(getNarrativeActiveIndex(1200, 1000, 4)).toBe(1);
    expect(getNarrativeActiveIndex(2800, 1000, 4)).toBe(2);
    expect(getNarrativeActiveIndex(3999, 1000, 4)).toBe(3);
    expect(getNarrativeTrackStepCount(390, 4)).toBe(5);
    expect(getNarrativeTrackStepCount(1400, 4)).toBe(5);
    expect(getNarrativeLineVisualState(0, 0)).toBe('active');
    expect(getNarrativeLineVisualState(1, 0)).toBe('next');
    expect(getNarrativeLineVisualState(0, 1)).toBe('previous');
    expect(getNarrativeLineVisualState(3, 1)).toBe('hidden-below');
    expect(shouldAnimateNarrative(1400, false)).toBe(true);
    expect(shouldAnimateNarrative(390, false)).toBe(true);
    expect(shouldAnimateNarrative(900, false)).toBe(true);
    expect(shouldAnimateNarrative(1400, true)).toBe(false);
  });
});
