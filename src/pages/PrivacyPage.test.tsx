import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { PrivacyPage } from './PrivacyPage';

describe('PrivacyPage', () => {
  it('renders the imported policy content and links', () => {
    render(
      <MemoryRouter>
        <PrivacyPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { level: 1, name: /privacy policy/i }))
      .toBeInTheDocument();
    expect(screen.getByText(/last updated: march 13, 2026/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /information we collect/i }))
      .toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /how we use your information/i }))
      .toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /contact us/i }))
      .toBeInTheDocument();
    expect(
      screen
        .getAllByRole('link', { name: /lks@maonhealth.com/i })
        .every((link) => link.getAttribute('href') === 'mailto:lks@maonhealth.com'),
    ).toBe(true);
    expect(screen.getByRole('link', { name: /twilio's privacy policy/i }))
      .toHaveAttribute('href', 'https://www.twilio.com/en-us/legal/privacy');
  });
});
