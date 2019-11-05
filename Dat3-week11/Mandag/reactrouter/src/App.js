import React from 'react';
//import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

var data = require("./data/Data.json");


function AllUsers() {
  return (
    <div>
      <h3>All Users</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Overview</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map((person, index) => {
            return (
              < tr key={index}>
                <td>
                  <img src={person.picture.thumbnail} alt="alt" />
                </td>
                <td>
                  {person.title}. {person.first} {person.last}
                </td>
                <td>
                  <Link to={`/details/${index}`}>More Info</Link>
                </td>
              </tr>
            )
          })}
          <tr>
            <td>
              <Link to={"/"}>Go Back</Link>
            </td>
          </tr>
        </tbody>
      </table>
      <Route path={`/details/:personId`} component={About} />

    </div >

  )
}

function About({ match }) {
  const info = data.find(({ id }) => id === match.params.personId)
  return (
    <div>
      <h1>HELLO</h1>
      <p>{info.first}</p>

    </div>
  )
}

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
          <Route path="/all">
            <AllUsers />
          </Route>
          <Route path='/details'></Route>
        </Switch>

      </div>
    </Router>
  )
}






export default App;
