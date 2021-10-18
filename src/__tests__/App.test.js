import { render, screen } from '@testing-library/react';
import App from '../components/App';

jest.mock('@auth0/auth0-react', () => ({
  Auth0Provider: ({ children }) => <div>{children}</div>,
  useAuth0: () => ({ loginWithRedirect: jest.fn }),
}))


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Muhasiba/i);
  expect(linkElement).toBeInTheDocument();
});
