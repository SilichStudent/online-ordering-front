import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from 'react-router';

import * as tokenService from '../../../../../common/services/token.service'

import "./user-login.scss";

export class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    if (tokenService.getUserToken()) {
      this.props.loadCurrentUser();
    }
  }

  handleEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  handlePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(user);

    this.props.authUser(user);
  };

  isUserSignedIn() {
    return tokenService.getUserToken() && this.props.currentUser && this.props.currentUser.uuid;
  }

  render() {

    if (this.isUserSignedIn()) {
      return <Redirect to="/users/dashboard" />
    }


    return (
      <div className="user-login-form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              onChange={this.handleEmail}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="password"
              onChange={this.handlePassword}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
