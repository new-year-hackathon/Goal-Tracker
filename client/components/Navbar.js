import React from "react"
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom"
import { App, Home, Goals, Shop, Login, Register } from '../components';
import './styles/Navbar.css'

const Navbar = () => {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/home">Home</Link> 
                    <Link to="/goals">My Goals</Link>
                    <Link to="/shop">Shop</Link>
                </nav>
                <div id="spacer"></div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/home" component={Home} />
                    <Route path="/goals" component={Goals} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
            </div>
        </Router>
    );
};
  
export default Navbar;
  