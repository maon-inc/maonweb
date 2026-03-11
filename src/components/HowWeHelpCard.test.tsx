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
        details={['detail one']}
        expanded={false}
        id="card"
        onToggle={onToggle}
        summary="summary copy"
        title="card title"
      />,
    );

    const button = screen.getByRole('button', { name: /card title/i });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveAttribute('aria-controls', 'card-details');
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('renders details only when expanded and details exist', () => {
    const { rerender } = render(
      <HowWeHelpCard
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
