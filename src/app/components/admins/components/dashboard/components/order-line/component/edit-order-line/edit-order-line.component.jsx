import React from "react";
import { Component } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import DateTime from "react-datetime";
import moment from "moment";

import "./edit-order-line.scss";

export class OrderLineUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderLineUuid: props.match.params.id,
      name: "",
      description: "",
      startTime: moment(),
      endTime: moment(),
      isActive: false,
      categories: props.categoriesAdded ? props.categoriesAdded : [],
      products: props.productsAdded ? props.productsAdded : [],
    };
  }

  componentDidMount() {
    this.props.loadCategories();
    this.props.loadProducts();
    this.props.loadOrderLine(this.state.orderLineUuid);
  }

  onSubmit = e => {
    e.preventDefault();
    const orderLine = {
      uuid: this.state.orderLineUuid,
      name: this.state.name || this.props.name,
      description: this.state.description || this.props.description,
      startTime: this.state.startTime.toISOString() || this.props.startTime,
      endTime: this.state.endTime.toISOString() || this.props.endTime,
      isActive: this.state.isActive || this.props.isActive,
      categories: this.state.categories || this.props.categories,
      products: this.state.products || this.props.products
    };

    this.props.updateOrderLine(orderLine);
    this.props.history.push("/admins/dashboard/order-line");
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
    const category = this.props.categories.filter(cat => cat.uuid === e.target.value)[0];
    this.state.categories.push(category)
    this.setState({ categories: this.state.categories });
  };

  handleProductsChange = e => {
    const product = this.props.products.filter(prod => prod.uuid === e.target.value)[0];
    this.state.products.push(product)
    this.setState({ products: this.state.products });
  };

  handleRemoveCategory = e => {
    const categories = this.state.categories.filter(cat => cat.uuid !== e.target.value);
    this.setState({ categories });
  }

  handleRemoveProduct = e => {
    const products = this.state.products.filter(prod => prod.uuid !== e.target.value);
    this.setState({ products });
  }

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
                defaultValue={this.props.name}
                onChange={this.handleNameChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                defaultValue={this.props.description}
                onChange={this.handleDescriptionChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>Start time</Form.Label>
              <DateTime
                defaultValue={this.props.startTime ? moment(this.props.startTime) : moment()}
                onChange={this.handleStartTimeChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>End time</Form.Label>
              <DateTime
                defaultValue={this.props.endTime ? moment(this.props.endTime) : moment()}
                onChange={this.handleEndTimeChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Is active" defaultValue={this.props.isActive} onChange={this.handleIsActiveChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Select categories</Form.Label>
              <Form.Control as="select" onClick={this.handleCategoriesChange} multiple >
                {this.props.categories.filter(cat => !this.state.categories.some(c => c.uuid === cat.uuid)).map(category => (
                  <option key={category.uuid} value={category.uuid}>{category.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Select products</Form.Label>
              <Form.Control as="select" onClick={this.handleProductsChange} multiple>
                {this.props.products.filter(prod => !this.state.products.some(p => p.uuid === prod.uuid)).map(product => (
                  <option key={product.uuid} value={product.uuid}>{product.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Selected categories</Form.Label>
              <Form.Control as="select" onClick={this.handleRemoveCategory} multiple>
                {this.state.categories.map(category => (
                  <option key={category.uuid} value={category.uuid}>{category.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Selected products</Form.Label>
              <Form.Control as="select" onClick={this.handleRemoveProduct} multiple>
                {this.state.products.map(product => (
                  <option key={product.uuid} value={product.uuid}>{product.name}</option>
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
