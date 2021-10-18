import {
  BrowserRouter as Router,
} from 'react-router-dom';
import store from '../ducks/store';
import { Provider as ReduxProvider } from 'react-redux';
import { Auth0Provider } from "@auth0/auth0-react";
import Container from '@mui/material/Container';
import AppBar from './AppBar';
import Nav from './Nav';
import ChildRoutes from './ChildRoutes';

function App() {
  return (
    <Auth0Provider
      domain=""
      clientId=""
      redirectUri={window.location.origin}
  >
    <ReduxProvider store={store}>
      <Router>
        <AppBar />
        <Nav />
        <Container maxWidth="sm">
          <ChildRoutes />
        </Container>
      </Router>
    </ReduxProvider>
    </Auth0Provider>
  );
}

export default App;
