import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the App component', () => {
  render(<App />);
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();
});
