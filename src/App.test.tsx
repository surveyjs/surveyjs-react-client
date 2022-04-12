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
  expect(surveys.length).toBe(2)
  expect(surveys[0].name).toBe('Product feedback survey')
  expect(surveys[1].name).toBe('Customer and his/her partner income survey')
});