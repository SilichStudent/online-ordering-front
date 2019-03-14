import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

export class ChangeName extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    handleHide = () => {
        this.props.history.push("/users/dashboard/profile")
    }

    handleNameChange = (e) => {
        console.log(e.target.value);

        this.setState({
            name: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const request = {
            name: this.state.name || this.props.name
        }

        this.props.changeName(request);
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
                        <Form onSubmit={this.onSubmit}>
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