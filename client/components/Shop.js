import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import './styles/Shop.css';

export class Shop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <h1>This is the shop!!</h1>
          <h1>This is the shop!!</h1>
          <h1>This is the shop!!</h1>
          <h1>This is the shop!!</h1>
          <h1>This is the shop!!</h1>
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

export default connect(mapState, mapDispatch)(Shop)