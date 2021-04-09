import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from './Components/Admin/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/'>

        </Route>
        <Route path='/admin'>
          <Admin></Admin>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
