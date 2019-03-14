import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

export class ChangePassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
        }
    }

    handleHide = () => {
        this.props.history.push("/users/dashboard/profile")
    }

    handleOldPasswordChange = (e) => {
        this.setState({
            oldPassword: e.target.value
        })
    }

    handleNewPasswordChange = (e) => {

        this.setState({
            newPassword: e.target.value
        })
    }

    handleNewConfirmPasswordChange = (e) => {

        this.setState({
            confirmPassword: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.newPassword === this.state.confirmPassword) {

            const request = {
                oldPassword: this.state.oldPassword,
                newPassword: this.state.newPassword
            }

            this.props.changePassword(request);
            this.props.history.push("/users/dashboard/profile")
        } else {
            this.setState({
                validated: false
            })
        }

    }

    render() {
        return (
            <div>
                <Modal
                    show={true}
                    onHide={this.handleHide}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Change password
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.onSubmit}
                            validated={this.state.validated}>
                            <Form.Group controlId="formGroupText">
                                <Form.Control type="text" placeholder="Enter old password" onChange={this.handleOldPasswordChange} required />
                            </Form.Group>
                            <Form.Group controlId="formGroupText">
                                <Form.Control type="text" placeholder="Enter new password" onChange={this.handleNewPasswordChange} required />
                            </Form.Group>
                            <Form.Group controlId="formGroupText">
                                <Form.Control type="text" placeholder="Confirm password" onChange={this.handleNewConfirmPasswordChange} required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                                </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}