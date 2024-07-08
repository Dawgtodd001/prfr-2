import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to prfr-2-1/i);
  expect(linkElement).toBeInTheDocument();
});
