import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import './styles/Register.css';

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <h1>Register</h1>
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

export default connect(mapState, mapDispatch)(Register)