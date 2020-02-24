import React, { Component } from "react";
import { observer } from "../node_modules/mobx-react";

// Stores
import authStore from "./stores/AuthStore";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    email: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    authStore.signup(this.state);
  };

  render() {
    const { username, password, email } = this.state;
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
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            placeholder="email"
            onChange={this.handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
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
          Sign up
        </button>
      </form>
    );
  }
}

export default observer(Signup);
