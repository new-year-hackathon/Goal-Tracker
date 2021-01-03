import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import './styles/SetGoal.css';

export class SetGoal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <h1>Set Goal</h1>
          <h1>Set Goal</h1>
          <h1>Set Goal</h1>
          <h1>Set Goal</h1>
          <h1>Set Goal</h1>
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

export default connect(mapState, mapDispatch)(SetGoal)