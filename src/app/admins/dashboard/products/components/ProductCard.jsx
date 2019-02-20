import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export class ProductCard extends Component {
    render() {
        return (
            <Card style={{ width: '18rem', height: '200px' }}>
                <Card.Img variant="top" src={this.props.image} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Button variant="primary">Edit</Button>
                    <Button variant="danger">Delete</Button>
                </Card.Body>
            </Card>
        )
    }
}