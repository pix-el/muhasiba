import {
  BrowserRouter as Router,
} from 'react-router-dom';
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
    <div className="App">
      <Router>
        <AppBar />
        <Nav />
        <Container maxWidth="sm">
          <ChildRoutes />
        </Container>
      </Router>
    </div>
    </Auth0Provider>
  );
}

export default App;
