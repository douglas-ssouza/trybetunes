import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from '../App';

describe('Header component tests', () => {
  it('should be rendered in "/user/search" route', () => {
    render(
      <MemoryRouter initialEntries={['/user/search']}>
        <App />
      </MemoryRouter>,
    );

    const header = screen.getByTestId('page-header');
    expect(header).toBeInTheDocument();
  });

  it('should be rendered in "/user/album/1" route', () => {
    render(
      <MemoryRouter initialEntries={['/user/album/1']}>
        <App />
      </MemoryRouter>,
    );

    const header = screen.getByTestId('page-header');
    expect(header).toBeInTheDocument();
  });

  it('should be rendered in "/user/favorites" route', () => {
    render(
      <MemoryRouter initialEntries={['/user/favorites']}>
        <App />
      </MemoryRouter>,
    );

    const header = screen.getByTestId('page-header');
    expect(header).toBeInTheDocument();
  });

  it('should be rendered in "/user/profile" route', () => {
    render(
      <MemoryRouter initialEntries={['/user/profile']}>
        <App />
      </MemoryRouter>,
    );

    const header = screen.getByTestId('page-header');
    expect(header).toBeInTheDocument();
  });

  it('should be rendered in "/user/profile/edit" route', () => {
    render(
      <MemoryRouter initialEntries={['/user/profile/edit']}>
        <App />
      </MemoryRouter>,
    );

    const header = screen.getByTestId('page-header');
    expect(header).toBeInTheDocument();
  });

  it('should be rendered in invalid routes', () => {
    render(
      <MemoryRouter initialEntries={['/notfound']}>
        <App />
      </MemoryRouter>,
    );

    const header = screen.getByTestId('page-header');
    expect(header).toBeInTheDocument();
  });
});
