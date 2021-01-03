import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from 'react-router-dom';
import './styles/Login.css';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
      this.setState({
          [event.target.name]: event.target.value,
      });
  }

  async handleSubmit (event) {
      event.preventDefault();
      try {
          await this.props.submit(this.state);
          this.setState({
            email: "",
            password: ""
          });
      } catch (err) {
          console.log(err)
      }
  }

  render() {
    return (
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Chewy"
          rel="stylesheet"
        />
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Email">
            <input
              type="text"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              placeholder="Email"
            />
          </label>
          <br />
          <label htmlFor="Password">
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              placeholder="Password"
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
        Don't have an account? 
        <Link to="/register">Sign up now!</Link>
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