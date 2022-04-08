import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { load } from './redux/surveys'
import store from './redux';

test('renders home page header', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Surveys/i);
  expect(linkElement).toBeInTheDocument();
});

test('get surveys list', async () => {
  const loadResult = await store.dispatch(load())
  const surveys = loadResult.payload
  expect(surveys.length).toBe(1)
  expect(surveys[0].name).toBe('New Survey')
})