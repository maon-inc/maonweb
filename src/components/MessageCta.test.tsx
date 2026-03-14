import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactNode } from 'react';

import { MAON_CTA_HREF } from '../content/contactLinks';
import { MessageCta } from './MessageCta';

vi.mock('qrcode.react', () => ({
  QRCodeSVG: ({
    value,
    title,
    className,
  }: {
    value: string;
    title?: string;
    className?: string;
  }) => (
    <svg
      aria-label={title}
      className={className}
      data-testid="message-cta-qr"
      data-value={value}
      viewBox="0 0 10 10"
    />
  ),
}));

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

function renderWithoutNavigation(ui: ReactNode) {
  return render(<div onClickCapture={(event) => event.preventDefault()}>{ui}</div>);
}

describe('MessageCta', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      writable: true,
      value: createMatchMedia(true),
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('opens the QR dialog for desktop-like pointers', async () => {
    const user = userEvent.setup();

    renderWithoutNavigation(<MessageCta href={MAON_CTA_HREF} label="say hi to maon" />);

    await user.click(screen.getByRole('link', { name: /say hi to maon/i }));

    expect(screen.getByRole('dialog', { name: /open this on your phone/i })).toBeInTheDocument();
    expect(screen.getByTestId('message-cta-qr')).toHaveAttribute('data-value', MAON_CTA_HREF);
  });

  it('does not open the QR dialog for touch-like pointers', async () => {
    const user = userEvent.setup();

    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      writable: true,
      value: createMatchMedia(false),
    });

    renderWithoutNavigation(<MessageCta href={MAON_CTA_HREF} label="say hi to maon" />);

    await user.click(screen.getByRole('link', { name: /say hi to maon/i }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes from the button and restores focus to the trigger', async () => {
    const user = userEvent.setup();

    renderWithoutNavigation(<MessageCta href={MAON_CTA_HREF} label="say hi to maon" />);

    const trigger = screen.getByRole('link', { name: /say hi to maon/i });

    await user.click(trigger);
    await user.click(screen.getByRole('button', { name: /close qr code/i }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it('closes on Escape and restores focus to the trigger', async () => {
    const user = userEvent.setup();

    renderWithoutNavigation(<MessageCta href={MAON_CTA_HREF} label="say hi to maon" />);

    const trigger = screen.getByRole('link', { name: /say hi to maon/i });

    await user.click(trigger);
    await user.keyboard('{Escape}');

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });
});
