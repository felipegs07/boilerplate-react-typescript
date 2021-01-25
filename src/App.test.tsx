import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('should render the title', () => {
    render(<App />);
    const headerElement = screen.getByText(/Boilerplate TypeScript/i);
    expect(headerElement).toBeInTheDocument();
  });

  it('should render the title in color red', () => {
    render(<App />);
    const headerElement = screen.getByText(/Boilerplate TypeScript/i);
    expect(headerElement).toHaveStyle({ color: 'red' });
  });
});
