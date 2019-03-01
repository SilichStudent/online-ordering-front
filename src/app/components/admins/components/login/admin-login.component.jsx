import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from 'react-router';

import * as tokenService from '../../../../../common/services/token.service'

import "./admin-login.scss";

export class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    if (tokenService.getManagerToken()) {
      this.props.loadCurrentManager();
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

    this.props.authManager(user);
  };

  isUserSignedIn() {
    return tokenService.getManagerToken() && this.props.currentManager && this.props.currentManager.id;
  }

  render() {

    if (this.isUserSignedIn()) {
      return <Redirect to="/admins/dashboard" />
    }


    return (
      <div className="admin-login-form">
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
