import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AddOrEdit from './AddOrEdit';
import Reflections from './Reflections';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Posts</Link>
            </li>
            <li>
              <Link to="/add">Add New</Link>
            </li>
          </ul>
        </nav>
        
        <hr />

        <Switch>
          <Route path="/add">
            <AddOrEdit />
          </Route>
          <Route path="/edit/:id">
            <AddOrEdit />
          </Route>
          <Route path="/">
            <Reflections />
          </Route>
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
