import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { homePageContent } from '../content/homePageContent';
import { HowWeHelpSection } from './HowWeHelpSection';

describe('HowWeHelpSection', () => {
  const setViewportWidth = (width: number) => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: width,
      writable: true,
    });
    window.dispatchEvent(new Event('resize'));
  };

  it('renders three compact cards initially', () => {
    const { container } = render(<HowWeHelpSection items={homePageContent.howWeHelp} />);

    const buttons = screen.getAllByRole('button');
    const articles = container.querySelectorAll('article');
    expect(buttons).toHaveLength(3);
    expect(articles[0]).toHaveStyle('--how-we-help-accent: #c6b5f5');
    expect(articles[1]).toHaveStyle('--how-we-help-accent: #7eaeea');
    expect(articles[2]).toHaveStyle('--how-we-help-accent: #59c85b');
    expect(screen.getByText(/quick check-ins when focus slips/i)).not.toBeVisible();
    expect(screen.getByRole('img', { name: /proactive interventions preview/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /personal patterns preview/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /adaptive over time preview/i })).toBeInTheDocument();
    expect(buttons.every((button) => button.getAttribute('aria-expanded') === 'false')).toBe(true);
  });

  it('keeps bullet points hidden on narrow screens until a card is expanded', async () => {
    const previousWidth = window.innerWidth;
    const user = userEvent.setup();
    setViewportWidth(768);

    render(<HowWeHelpSection items={homePageContent.howWeHelp} />);

    const card = screen.getByRole('button', { name: /adaptive over time/i });
    const detail = screen.getByText(/learns which nudges help/i);

    expect(detail).not.toBeVisible();
    expect(card).toHaveAttribute('aria-expanded', 'false');

    await user.click(card);
    expect(detail).toBeVisible();
    expect(card).toHaveAttribute('aria-expanded', 'true');

    await user.click(card);
    expect(detail).not.toBeVisible();
    expect(card).toHaveAttribute('aria-expanded', 'false');

    setViewportWidth(previousWidth);
  });

  it('expands a card and collapses the previously open card', async () => {
    const user = userEvent.setup();
    render(<HowWeHelpSection items={homePageContent.howWeHelp} />);

    const firstCard = screen.getByRole('button', { name: /proactive interventions/i });
    const secondCard = screen.getByRole('button', { name: /personal patterns/i });

    await user.click(firstCard);
    expect(screen.getByText(/quick check-ins when focus slips/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /proactive interventions preview/i })).toBeInTheDocument();
    expect(firstCard).toHaveAttribute('aria-expanded', 'true');

    await user.click(secondCard);
    expect(
      screen.getByText(/show what keeps you clear and steady/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/quick check-ins when focus slips/i)).not.toBeVisible();
    expect(firstCard).toHaveAttribute('aria-expanded', 'false');
    expect(secondCard).toHaveAttribute('aria-expanded', 'true');
  });

  it('collapses the active card when clicked again', async () => {
    const user = userEvent.setup();
    render(<HowWeHelpSection items={homePageContent.howWeHelp} />);

    const card = screen.getByRole('button', { name: /adaptive over time/i });

    await user.click(card);
    expect(screen.getByText(/learns which nudges help/i)).toBeInTheDocument();

    await user.click(card);
    expect(screen.getByText(/learns which nudges help/i)).not.toBeVisible();
    expect(card).toHaveAttribute('aria-expanded', 'false');
  });

  it('supports keyboard activation and aria relationships', async () => {
    const user = userEvent.setup();
    render(<HowWeHelpSection items={homePageContent.howWeHelp} />);

    const card = screen.getByRole('button', { name: /personal patterns/i });
    card.focus();
    await user.keyboard('{Enter}');

    expect(card).toHaveFocus();
    expect(card).toHaveAttribute('aria-expanded', 'true');
    expect(card).toHaveAttribute('aria-controls', 'personal-patterns-details');
    expect(document.getElementById('personal-patterns-details')).toBeInTheDocument();
  });

  it('falls back to no selection for an invalid initial id', () => {
    render(
      <HowWeHelpSection
        initialSelectedId="missing"
        items={homePageContent.howWeHelp}
      />,
    );

    expect(screen.getByText(/quick check-ins when focus slips/i)).not.toBeVisible();
    expect(
      screen.getAllByRole('button').every((button) => button.getAttribute('aria-expanded') === 'false'),
    ).toBe(true);
  });

  it('does not expand items with empty details', async () => {
    const user = userEvent.setup();
    render(
      <HowWeHelpSection
        items={[
          {
            id: 'empty',
            title: 'empty state',
            summary: 'still renders safely',
            accentColor: '#cccccc',
            previewImage: {
              alt: 'Empty state preview',
              src: '/empty.svg',
            },
            details: [],
          },
        ]}
      />,
    );

    const card = screen.getByRole('button', { name: /empty state/i });
    await user.click(card);

    expect(card).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('matches the stable expanded snapshot', async () => {
    const user = userEvent.setup();
    const { asFragment } = render(<HowWeHelpSection items={homePageContent.howWeHelp} />);

    await user.click(screen.getByRole('button', { name: /proactive interventions/i }));

    expect(asFragment()).toMatchSnapshot();
  });
});
