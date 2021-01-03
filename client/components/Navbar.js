import React from "react"
import { Route, BrowserRouter as Router, Link } from "react-router-dom"
import { Home, Goals, Shop, Login, Register } from '../components';
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
                <Route path="/home" component={Home} />
                <Route path="/goals" component={Goals} />
                <Route path="/shop" component={Shop} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </div>
        </Router>
    );
};
  
export default Navbar;
  