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
    expect(screen.getByTestId('home-top-scene-media')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /it's easy to picture the life you want\. Living it is the hard part\./i,
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
