import React from 'react'
import { Component } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

export class CategoryCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }


    onSubmit = (e) => {
        e.preventDefault();
        const category = {
            name: this.state.name
        };

        if (!category.name) {
            return;
        }

        this.props.createCategory(category);

    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }

    handleClose = (e) => {
        this.props.history.push(`/admins/dashboard/categories`);
    }

    render() {
        return (
            <Modal show={true} onHide={this.handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" onChange={this.handleNameChange} />
                        </Form.Group>
                        <Button variant="outline-primary" type="submit">Create</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}
