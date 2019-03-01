import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

export class ChangeName extends Component {

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
                            Change name
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formGroupText">
                                <Form.Control type="text" placeholder="Enter name" defaultValue={this.props.name} />
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