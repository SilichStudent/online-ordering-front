import React from 'react'
import { Component } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import DateTime from 'react-datetime'

export class OrderLineCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }


    onSubmit = (e) => {
        e.preventDefault();
        const manager = {
            email: this.state.email
        };

        if (!manager.email) {
            return;
        }

        this.props.createOrderLine(manager);
        this.props.history.push('/admins/dashboard/order-line');

    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }

    handleClose = (e) => {
        this.props.history.push('/admins/dashboard/order-line');
    }

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
                            <Form.Control type="text" placeholder="Enter name" onChange={this.handleEmailChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" onChange={this.handleEmailChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Start time</Form.Label>
                            <DateTime />
                        </Form.Group>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>End time</Form.Label>
                            <DateTime />
                        </Form.Group>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Is active</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" onChange={this.handleEmailChange} />
                        </Form.Group>
                        <Button variant="outline-primary" type="submit">Create</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}
