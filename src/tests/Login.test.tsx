import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import App from '../App';

describe('Login component tests', () => {
  it('has an input field to type name', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const input = screen.getByRole('textbox', { name: /digite seu nome/i });

    expect(input).toBeInTheDocument();
  });

  it('has a button "Entrar"', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Entrar');
  });

  it('button should be disabled if input has less than 3 characters', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const input = screen.getByRole('textbox', { name: /digite seu nome/i });
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();

    userEvent.type(input, 'a');
    expect(button).toBeDisabled();

    userEvent.clear(input);
    userEvent.type(input, 'ab');
    expect(button).toBeDisabled();

    userEvent.clear(input);
    userEvent.type(input, 'abc');
    expect(button).not.toBeDisabled();

    userEvent.clear(input);
    userEvent.type(input, 'Douglas');
    expect(button).not.toBeDisabled();
  });

  it('redirects to "/user/search" after button is clicked', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const input = screen.getByRole('textbox', { name: /digite seu nome/i });
    const button = screen.getByRole('button');

    userEvent.type(input, 'Douglas');
    userEvent.click(button);

    expect(input).not.toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });
});
