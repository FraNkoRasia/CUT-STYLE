import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

test('renders About component', () => {
  render(<About />);
  const aboutElement = screen.getByText(/About/i);
  expect(aboutElement).toBeInTheDocument();
});

test('renders description', () => {
  render(<About />);
  const descriptionElement = screen.getByText(/This is the About component/i);
  expect(descriptionElement).toBeInTheDocument();
});

test('renders button', () => {
  render(<About />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});