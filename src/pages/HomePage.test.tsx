import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('renders the scenic top scene and hero copy', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('home-top-scene')).toBeInTheDocument();
    expect(screen.getByTestId('home-top-scene-video')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /an assistant that uses your biometrics to keep you balanced/i,
      }),
    ).toBeInTheDocument();
  });

  it('matches the stable home page snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
