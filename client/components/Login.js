import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import './styles/Login.css';

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <h1>Login</h1>
          Don't have an account? Sign up here: 
          <Link to="/register">
            <button type="submit">
              Register
            </button>
          </Link>
      </div>
    );
  }
}

const mapState = () => {
  return {

  };
};

const mapDispatch = () => {
  return {
  }
};

export default connect(mapState, mapDispatch)(Login)