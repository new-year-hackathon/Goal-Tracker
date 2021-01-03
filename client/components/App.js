import React from 'react';
import { connect } from "react-redux";
import { withRouter, Link } from 'react-router-dom';
import Navbar from './Navbar';
import './styles/App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Link to="/login">
          <button type="submit">
            Login
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

export default connect(mapState, mapDispatch)(App)