import React from 'react'
import { Component } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

import './create-user.scss'

export class UserCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: ''
        }
    }


    onSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: this.state.email,
            name: this.state.name
        };

        if (!user.email || !user.name) {
            return;
        }

        this.props.createUser(user);
        this.props.history.push('/admins/dashboard/users');

    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }

    handleClose = (e) => {
        this.props.history.push('/admins/dashboard/users');
    }

    render() {
        return (
            <Modal show={true} onHide={this.handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control ref="email" type="email" placeholder="Enter email" onChange={this.handleEmailChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control ref="name" type="text" placeholder="Enter name" onChange={this.handleNameChange} />
                        </Form.Group>
                        <Button variant="outline-primary" type="submit">Create</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}
