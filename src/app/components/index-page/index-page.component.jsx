import React, { Component } from "react";
import { Redirect } from "react-router";

export class IndexPage extends Component {
  render() {
    if (!localStorage.getItem("userToken")) {
      return <Redirect to="/users/login" />;
    } else {
        return <Redirect to="/users/dashboard" />
    }
  }
}
