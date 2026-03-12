import { render, screen } from '@testing-library/react';

import { HowWeHelpCard } from './HowWeHelpCard';

describe('HowWeHelpCard', () => {
  const onToggle = vi.fn();

  beforeEach(() => {
    onToggle.mockReset();
  });

  it('renders compact content with button semantics', () => {
    render(
      <HowWeHelpCard
        accentColor="#c6b5f5"
        details={['detail one']}
        expanded={false}
        id="card"
        onToggle={onToggle}
        summary="summary copy"
        title="card title"
      />,
    );

    const button = screen.getByRole('button', { name: /card title/i });
    const article = button.closest('article');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveAttribute('aria-controls', 'card-details');
    expect(article).toHaveStyle('--how-we-help-accent: #c6b5f5');
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('renders details only when expanded and details exist', () => {
    const { rerender } = render(
      <HowWeHelpCard
        accentColor="#7eaeea"
        details={['detail one', 'detail two']}
        expanded
        id="card"
        onToggle={onToggle}
        summary="summary copy"
        title="card title"
      />,
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText(/detail one/i)).toBeInTheDocument();

    rerender(
      <HowWeHelpCard
        accentColor="#7eaeea"
        details={[]}
        expanded
        id="card"
        onToggle={onToggle}
        summary="summary copy"
        title="card title"
      />,
    );

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});
