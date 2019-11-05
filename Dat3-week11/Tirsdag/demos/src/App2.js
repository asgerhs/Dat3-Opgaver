import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import Category from './Category.jsx';
import Login, { fakeAuth } from './Login.jsx';
import Products from './Products.jsx';


const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)
/*const Products = () => (
    <div>
        <h2>Products</h2>
    </div>
)*/

const Admin = () => (
    <div>
        <h2>Welcome, Admin</h2>
    </div>
)

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => fakeAuth.isAuthenticated === true
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />} />
    )
}

class App extends Component {
    render() {

        return (
            <div>
                <nav className="navbar navbar-light">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Homes</Link></li>
                        <li><Link to="/category">Category</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/admin">Admin</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/category" component={Category} />
                    <Route path="/login" component={Login} />
                    <Route path="/products" component={Products} />
                    <PrivateRoute authed={fakeAuth.isAuthenticated} path='/admin' component={Admin} />
                </Switch>

            </div>
        );
    }
}
export default App;