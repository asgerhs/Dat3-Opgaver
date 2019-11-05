import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from './About.js';
import AllUsers from './AllUsers.js';

function Welcome() {
  return (
    <div>
      <h3>Welcome to our page!</h3>
      <Link to="/all">See all Users</Link>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/all" component={AllUsers}>
          </Route>
          <Route path='/details/:personId' component={About}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
