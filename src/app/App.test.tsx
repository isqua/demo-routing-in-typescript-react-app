import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders main menu', () => {
  render(<App />);
  const homeLink = screen.getByRole('link', { name: 'Home' });
  const personsLink = screen.getByRole('link', { name: 'People' });
  const eventsLink = screen.getByRole('link', { name: 'Events' });

  expect(homeLink).toBeInTheDocument();
  expect(eventsLink).toBeInTheDocument();
  expect(personsLink).toBeInTheDocument();
});
