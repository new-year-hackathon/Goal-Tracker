import React from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom"
import Register from "./Register"
import './styles/Login.css';

const Login = () => {
    return (
        <Router>
            <script src="https://apis.google.com/js/platform.js" async defer></script>
  

            <div id="fb-root"></div>
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0" nonce="NEH6F5cq"></script>
  
            <div class="main">
                <h1>Login</h1>
                <input type="text" id="loginEmail" name="email" placeholder="Email" ></input>
  
                <span id="password">
                    <input onfocus="return turnPassword()" name="password" type="text" placeholder="Password"/>
                </span>
                <br></br>
                <input id="checkbox" type="checkbox"/><label for="checkbox">Remember Me</label>

                <button class="button">LOGIN</button>

                <p>Don't have an account? <Link to="/register">Sign up now!</Link> </p>
                <Route exact path="/register" component={Register} />
            </div>

            <div class="g-signin2" data-onsuccess="onSignIn"></div>

            <div class="fb-login-button" data-width="" data-size="small" data-button-type="login_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>

            <meta name="google-signin-client_id" content="362422526569-jhsvradkhis40i8avr8p95bd6ujfun33.apps.googleusercontent.com"/>

            <div class="fb-login-button" data-width="" data-size="small" data-button-type="login_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>



            <script  src="./script.js"></script>
            

        </Router>
    );
};
  
export default Login;