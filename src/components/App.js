import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Container from '@mui/material/Container';
import Nav from './Nav';
import ChildRoutes from './ChildRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Container maxWidth="sm">
          <ChildRoutes />
        </Container>
      </Router>
    </div>
  );
}

export default App;
