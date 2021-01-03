import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home, Goals, Shop, Login, Register } from '../components';

export class Routes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/goals" component={Goals} />
            <Route path="/shop" component={Shop} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Switch>

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

export default connect(mapState, mapDispatch)(Routes)