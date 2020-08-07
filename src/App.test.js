import React from 'react';
import { render } from '@testing-library/react';
import Car from './myapp.js';

test('renders learn react link', () => {
  const { getByText } = render(<Car />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
