import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  useLocation,
  Switch,
  Link,
  useParams
} from 'react-router-dom';
import bookStore from './BookStore.js';



//const { book, setBook } = useState(bookStore._books);

function Header() {
  return (
    <ul className="header">
      <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
      <li><NavLink activeClassName="active" to="/add-book">Add Book</NavLink></li>
      <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
    </ul>
  )
}

function Home() {
  return (
    <div>
      <h3>Home</h3>
    </div>
  )
}



function Product() {
  return (
    <div>
      <h3>{bookStore._books.length}</h3>
      <ul>
        {bookStore._books.map((book, index) => {
          return (
            <li key={index}>
              {book.title} <Link to={`/details/${index}`}>Details</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function Details() {
  let { bookId } = useParams();
  let book = bookStore._books.filter(book => book.id == bookId);
  console.log(book.info);
  return (
    <div>
      <ul>
        <li>

        </li>
      </ul>

    </div>
  )
}


/*
function AddBook(book) {
  return (
    <div>
      <h3>Add Book</h3>
      <input id="title" type="text" placeholder="Title" value={book.title} />
      <input id="info" type="text" placeholder="Info" value={book.info} />
      <button onClick={bookStore.addBook(book)}>Add</button>
    </div>
  )
}
*/


function Company() {
  return (
    <div>
      <h3>Company</h3>
    </div>
  )
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for {location.pathname}
      </h3>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Product />
          </Route>
          {/* <Route path="/add-book">
            <AddBook />
          </Route>
  */}
          <Route path="/company">
            <Company />
          </Route>
          <Route path='/details/:bookId'>
            <Details />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
