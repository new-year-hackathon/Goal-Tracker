import React from "react";
import { connect } from "react-redux";
import { fetchPets } from "../store/pet";
import { withRouter } from 'react-router-dom';
import './styles/Shop.css';

export class Shop extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    try {
      this.props.getPets();
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { pets } = this.props
    return (
      <div>
        <h1>Shop</h1>
        {/* Add pet's image and name and stuff here */}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    pets: state.pets
  };
};

const mapDispatch = (dispatch) => {
  return {
    getPets: () => dispatch(fetchPets)
  }
};

export default connect(mapState, mapDispatch)(Shop)