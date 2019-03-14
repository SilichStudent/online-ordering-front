import React, { Component } from 'react';

import { Button, Form, Modal } from 'react-bootstrap'

import './edit-product.scss'

export class EditProduct extends Component {

    constructor(props){
        super(props);
        this.state = {
            productUuid: props.match.params.productId,
            categoryUuid: props.match.params.id
        }
    }

    componentDidMount(){
        this.props.getProduct(this.state.productUuid);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const product = {
            uuid: this.state.productUuid,
            name: this.state.name || this.props.name,
            description: this.state.description || this.props.description,
            image: this.state.image || this.props.image,
            categoryUuid: this.state.categoryUuid || this.props.categoryUuid
        };

        if (!product.name || !product.description || !product.image) {
            return;
        }

        this.props.updateProduct(this.props.uuid, product);
        this.props.history.push(`/admins/dashboard/categories/${this.state.categoryUuid}/products`);
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }

    handleDescriptionChange = (e) => {
        this.setState({ description: e.target.value });
    }

    handleImageChange = (e) => {
        this.setState({ image: e.target.value });
    }

    handleClose = (e) => {
        this.props.history.push(`/admins/dashboard/categories/${this.state.categoryUuid}/products`);
    }

    render() {
        return (
            <div id="edit-product-content">
                <Modal show={true} onHide={this.handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Create product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" defaultValue={this.props.name} onChange={this.handleNameChange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter decription" defaultValue={this.props.description} onChange={this.handleDescriptionChange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="text" placeholder="Image url" defaultValue={this.props.image} onChange={this.handleImageChange} />
                            </Form.Group>
                            <Button variant="outline-primary" type="submit">Update</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}