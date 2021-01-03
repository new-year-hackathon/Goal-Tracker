import React from "react"
import { Route, BrowserRouter as Router, Link } from "react-router-dom"
import Login from "./Login"
import './styles/Navbar.css';

const Register = () => {
    return (
        <Router>
            <div>
                <h1>Register</h1>

                <input type="text" id="loginEmail" name="email" placeholder="First Name" />

                <input type="text" id="loginEmail" name="email" placeholder="Last Name" />
                <br></br>
                <input type="phrase" id="signupEmail" name="email" placeholder="Email" />
 
                <br></br>
  
                <input type="password" placeholder="Password" id="password" required/>

                <br></br>

                <input type="password" placeholder="Confirm Password" id="confirm" required/>
 
                <br> </br>

                <input type="button" id="submit" value="REGISTER" onclick="return Match()"/>
 
                <br></br>

                <p>Already have an account? <Link to="/login">Login here!</Link></p>
                <Route exact path="/login" component={Login} />
            </div>
 
            <script  src="./script.js"></script>

        </Router>
    );
};
  
export default Register;