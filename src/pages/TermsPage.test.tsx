import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { TermsPage } from './TermsPage';

describe('TermsPage', () => {
  it('renders the imported terms content and links', () => {
    render(
      <MemoryRouter>
        <TermsPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { level: 1, name: /terms of service/i }))
      .toBeInTheDocument();
    expect(screen.getByText(/last updated: march 2, 2025/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /1\. agreement to terms/i }))
      .toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /3\. medical disclaimer/i }))
      .toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /21\. contact us/i }))
      .toBeInTheDocument();
    expect(
      screen
        .getAllByRole('link', { name: /privacy policy/i })
        .every((link) => link.getAttribute('href') === '/privacy'),
    ).toBe(true);
    expect(
      screen
        .getAllByRole('link', { name: /lks@maonhealth.com/i })
        .every((link) => link.getAttribute('href') === 'mailto:lks@maonhealth.com'),
    ).toBe(true);
    expect(screen.getByText(/MAON may offer SMS and voice communication features powered by Twilio/i))
      .toBeInTheDocument();
  });
});
