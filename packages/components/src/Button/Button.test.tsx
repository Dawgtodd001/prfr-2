import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

test('Button displays correct label', () => {
  render(<Button label='Test Label' onClick={() => {}} />);
  expect(screen.getByText('Test Label')).toBeInTheDocument();
});

test('Button click event', () => {
  const handleClick = jest.fn();
  render(<Button label='Click me' onClick={handleClick} />);
  fireEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
