import React from "react"
import { Route, BrowserRouter as Router, Link } from "react-router-dom"
import Home from "./Home"
import Goals from "./Goals"
import Shop from "./Shop"
import './styles/Navbar.css';

const Navbar = () => {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/home">Home</Link> 
                    <Link to="/goals">My Goals</Link>
                    <Link to="/shop">Shop</Link>
                </nav>
                <Route exact path="/home" component={Home} />
                <Route exact path="/goals" component={Goals} />
                <Route exact path="/shop" component={Shop} />
            </div>
        </Router>
    );
};
  
export default Navbar;
  