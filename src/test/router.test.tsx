import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { SiteLayout } from '../app/SiteLayout';
import { MAON_CTA_HREF } from '../content/contactLinks';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';

function renderWithRouter(initialEntries: string[]) {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route element={<SiteLayout />} path="/">
          <Route element={<HomePage />} index />
          <Route element={<AboutPage />} path="about" />
          <Route element={<ContactPage />} path="contact" />
          <Route element={<NotFoundPage />} path="*" />
        </Route>
      </Routes>
    </MemoryRouter>,
  );
}

describe('app router', () => {
  it('renders the shared layout and redesigned home page', () => {
    renderWithRouter(['/']);

    expect(screen.getByRole('link', { name: 'MAON' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /an assistant that uses your biometrics to keep you balanced/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/we understand/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /how we help/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /try now/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /try now/i })).toHaveAttribute('href', MAON_CTA_HREF);
    expect(screen.getAllByRole('link', { name: /say hi to maon/i })).toHaveLength(2);
    expect(
      screen
        .getAllByRole('link', { name: /say hi to maon/i })
        .every((link) => link.getAttribute('href') === MAON_CTA_HREF),
    ).toBe(true);
    expect(screen.getByLabelText(/product preview/i)).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'About' })).not.toBeInTheDocument();
  });

  it('navigates between pages', async () => {
    const user = userEvent.setup();

    renderWithRouter(['/about']);
    await user.click(screen.getByRole('link', { name: 'Contact' }));

    expect(await screen.findByRole('heading', { level: 1, name: /contact/i }))
      .toBeInTheDocument();
  });

  it('shows the not found page for unknown routes', () => {
    renderWithRouter(['/missing']);

    expect(
      screen.getByRole('heading', { level: 1, name: /page not found/i }),
    ).toBeInTheDocument();
  });
});
