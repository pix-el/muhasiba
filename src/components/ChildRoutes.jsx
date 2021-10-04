import {
    Switch,
    Route,
  } from 'react-router-dom';
  import AddOrEdit from './AddOrEdit';
  import Reflections from './Reflections';
  
  function ChildRoutes() {
    return (
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
    );
  }
  
  export default ChildRoutes;
  