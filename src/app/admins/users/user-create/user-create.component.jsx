import React from 'react'
import { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

@import './create-user.scss'

export class UserCreate extends Component {

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);

    }

    onSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: this.state.email,
            name: this.state.name
        };

        this.props.createUser(user);

    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <div className="user-create">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control ref="email" type="email" placeholder="Enter email" onChange={this.handleEmailChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref="name" type="text" placeholder="Enter name" onChange={this.handleNameChange} />
                    </Form.Group>
                    <Button variant="outline-primary" type="submit">Send</Button>
                </Form>
            </div>
        )
    }
}