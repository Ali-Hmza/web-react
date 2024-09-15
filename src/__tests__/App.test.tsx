import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import App from '../App';

test('renders welcome message and learn more button', () => {
  render(<App />);

  // Check for text in the component
  const welcomeMessage = screen.getByText(/Welcome to TechBrand/i);
  expect(welcomeMessage).toBeInTheDocument();

  const learnMoreButton = screen.getByText(/Learn More/i);
  expect(learnMoreButton).toBeInTheDocument();
});
