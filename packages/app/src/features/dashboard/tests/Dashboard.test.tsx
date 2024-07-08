import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

test('Dashboard displays welcome message', () => {
  render(<Dashboard />);
  expect(screen.getByText('Welcome to the dashboard!')).toBeInTheDocument();
});
