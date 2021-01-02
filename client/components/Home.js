import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from 'react-router-dom';

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <h1>This is the homepage!!</h1>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
  };
};

const mapDispatch = (dispatch) => {
  return {
  }
};

export default withRouter(connect(mapState, mapDispatch)(Home));
