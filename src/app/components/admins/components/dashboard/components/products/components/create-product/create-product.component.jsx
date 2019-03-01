import React from 'react'
import { Component } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

export class ProductCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            image: ''
        }
    }


    onSubmit = (e) => {
        e.preventDefault();
        const product = {
            name: this.state.name,
            description: this.state.description,
            image: this.state.image,
            categoryUuid: this.props.categoryKey === 'default' ? null : this.props.categoryKey
        };

        if (!product.name || !product.description || !product.image) {
            return;
        }

        this.props.createProduct(product);
        this.props.history.push('/admins/dashboard/products');
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
        this.props.history.push('/admins/dashboard/products');
    }

    render() {
        return (
            <Modal show={true} onHide={this.handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" onChange={this.handleNameChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter decription" onChange={this.handleDescriptionChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" placeholder="Image url" onChange={this.handleImageChange} />
                        </Form.Group>
                        <Button variant="outline-primary" type="submit">Create</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}
