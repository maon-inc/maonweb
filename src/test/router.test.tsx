import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { SiteLayout } from '../app/SiteLayout';
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
        name: /what if an ai agent's only job was to keep you balanced/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/we understand/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /how we help/i })).toBeInTheDocument();
    expect(
      screen.getByText(/shared layout, route-aware chrome, and a focused landing page/i),
    ).toBeInTheDocument();
  });

  it('navigates between pages', async () => {
    const user = userEvent.setup();

    renderWithRouter(['/']);
    await user.click(screen.getByRole('link', { name: 'About' }));

    expect(await screen.findByRole('heading', { level: 1, name: /about this starter/i }))
      .toBeInTheDocument();
  });

  it('shows the not found page for unknown routes', () => {
    renderWithRouter(['/missing']);

    expect(
      screen.getByRole('heading', { level: 1, name: /page not found/i }),
    ).toBeInTheDocument();
  });
});
