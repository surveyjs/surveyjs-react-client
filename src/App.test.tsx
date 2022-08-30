import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { load } from './redux/surveys'
import store from './redux';

test('renders home page header', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Surveys/i, { selector: 'span' });
  expect(linkElement).toBeInTheDocument();
  const headerElement = screen.getByText(/My Surveys/i, { selector: 'h1' });
  expect(headerElement).toBeInTheDocument();
});

test('get surveys list', async () => {
  const loadResult = await store.dispatch(load())
  const surveys = loadResult.payload
  expect(surveys.length).toBe(2)
  expect(surveys[0].name).toBe('Product Feedback Survey')
  expect(surveys[1].name).toBe('Customer and their partner income survey')
});