import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import './styles/Milestone.css';

export class Milestone extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <h1>Milestone Page</h1>
          <h1>Milestone Page</h1>
          <h1>Milestone Page</h1>
          <h1>Milestone Page</h1>
          <h1>Milestone Page</h1>
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

export default connect(mapState, mapDispatch)(Milestone)