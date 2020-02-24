import React, { Component } from "react";
import { observer } from "../node_modules/mobx-react";
// import { Redirect } from "react-router-dom";

// Stores

import authStore from "./stores/AuthStore";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    authStore.login(this.state, this.props.history);
  };

  render() {
    // if (!authStore.user) return <Redirect to="/login" />;

    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={username}
            placeholder="username"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            placeholder="password"
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    );
  }
}

export default observer(Login);
