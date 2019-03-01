import React from 'react'
import { Component } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

export class ManagerCreate extends Component {

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

        this.props.createManager(manager);
        this.props.history.push('/admins/dashboard/managers');

    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }

    handleClose = (e) => {
        this.props.history.push('/admins/dashboard/managers');
    }

    render() {
        return (
            <Modal show={true} onHide={this.handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create manager</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control ref="email" type="email" placeholder="Enter email" onChange={this.handleEmailChange} />
                        </Form.Group>
                        <Button variant="outline-primary" type="submit">Create</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}
