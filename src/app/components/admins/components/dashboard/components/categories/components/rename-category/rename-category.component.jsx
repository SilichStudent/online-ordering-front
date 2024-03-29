import React from 'react'
import { Component } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

export class CategoryRename extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryUuid: props.match.params.id,
            name: ''
        }
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.match.params.id !== this.props.match.params.id;
    }

    componentWillUpdate(nextProps, nextState) {
        this.setState({
            categoryUuid: nextProps.match.params.id
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const product = {
            name: this.state.name
        };

        if (!product.name) {
            return;
        }

        this.props.renameCategory(this.state.categoryUuid, product);
        this.props.history.push(`/admins/dashboard/categories/${this.state.categoryUuid}/products`);
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }

    handleClose = (e) => {
        this.props.history.push(`/admins/dashboard/categories/${this.state.categoryUuid}/products`);
    }

    render() {
        return (
            <Modal show={true} onHide={this.handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Rename category</Modal.Title>
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
