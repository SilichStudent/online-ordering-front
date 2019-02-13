import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'react-bootstrap'

import { callApi } from '../../../services/api/api'
import { RequestBuilder } from '../../../services/api/RequestBuilder'
import { Methods } from '../../../services/api/Request'

class UserCreate extends Component {

    constructor(props) {
        super(props);
        this._onSubmit = this._onSubmit.bind(this);
    }

    async _onSubmit(e) {
        const email = this.refs.email.getAttribute('data-value');
        const name = this.refs.name.getAttribute('data-value');

        try {
            const request = new RequestBuilder()
                .addEndpoint("/api/v1/users")
                .addMethod(Methods.POST)
                .addBody({ email: "asdasd", name: "llolool" })
                .build();
            const response = await callApi(request);
        } catch (err) {
            console.log(err);

        }

        // e.preventDefault();
    }

    render() {
        return (
            <div className="user-create">
                <Form onSubmit={this._onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control ref="email" type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref="name" type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Button variant="outline-primary" type="submit">Send</Button>
                </Form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(UserCreate)