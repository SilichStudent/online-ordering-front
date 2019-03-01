import React from "react";
import { Component } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import DateTime from "react-datetime";
import moment from "moment";

import "./create-order-line.scss";

export class OrderLineCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      startTime: moment(),
      endTime: moment(),
      isActive: false,
      categories: [],
      products: []
    };
  }

  componentDidMount(){
      this.props.loadCategoriesTree()
  }

  onSubmit = e => {
    e.preventDefault();
    const orderLine = {
      name: this.state.name,
      description: this.state.description,
      startTime: this.state.startTime.toISOString(),
      endTime: this.state.endTime.toISOString(),
      isActive: this.state.isActive,
      categories: this.state.categories,
      products: this.state.products
    };

    console.log(orderLine);

    // this.props.createOrderLine(manager);
    // this.props.history.push("/admins/dashboard/order-line");
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };
  handleStartTimeChange = e => {
    this.setState({ startTime: e });
  };

  handleEndTimeChange = e => {
    this.setState({ endTime: e });
  };

  handleIsActiveChange = e => {
    this.setState({ isActive: !this.state.isActive });
  };

  handleCategoriesChange = e => {
    this.setState({ email: e.target.value });
  };

  handleProductsChange = e => {
    this.setState({ email: e.target.value });
  };

  handleClose = e => {
    this.props.history.push("/admins/dashboard/order-line");
  };

  render() {
    return (
      <Modal show={true} onHide={this.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create manager</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="formBasicText">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={this.handleNameChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={this.handleDescriptionChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>Start time</Form.Label>
              <DateTime
                defaultValue={moment()}
                onChange={this.handleStartTimeChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>End time</Form.Label>
              <DateTime
                defaultValue={moment()}
                onChange={this.handleEndTimeChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Is active" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Select categories</Form.Label>
              <Form.Control as="select" multiple>
                {this.props.categories.map(category => (
                  <option>{category.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button variant="outline-primary" type="submit">
              Create
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}
