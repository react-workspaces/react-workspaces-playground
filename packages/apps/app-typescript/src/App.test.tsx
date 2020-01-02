import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const h2Element = getByText(/Hot Reload Your React TypeScript Workspaces/i);
  expect(h2Element).toBeInTheDocument();
});
