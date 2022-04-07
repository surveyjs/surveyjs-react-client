import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page header', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Surveys/i);
  expect(linkElement).toBeInTheDocument();
});
