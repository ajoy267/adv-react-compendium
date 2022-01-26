import { render, screen } from '@testing-library/react';
import Home from './Home';

test('should render a list of Pokemon', async () => {
  render(<Home />);

  const loading = screen.getByText(/loading/i);

  expect(loading).toBeInTheDocument();
});
