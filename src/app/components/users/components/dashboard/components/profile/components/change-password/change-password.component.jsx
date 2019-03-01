import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

export class ChangePassword extends Component {

    handleHide = () => {
        this.props.history.push("/users/dashboard/profile")
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
                        <Form>
                            <Form.Group controlId="formGroupText">
                                <Form.Control type="text" placeholder="Enter old password" defaultValue={this.props.name} />
                            </Form.Group>
                            <Form.Group controlId="formGroupText">
                                <Form.Control type="text" placeholder="Enter new password" defaultValue={this.props.name} />
                            </Form.Group>
                            <Form.Group controlId="formGroupText">
                                <Form.Control type="text" placeholder="Confirm password" defaultValue={this.props.name} />
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