import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export class Products extends Component{
    render() {
        return (
            <Card style={{ width: '18rem', height: '200px' }}>
                <Card.Body>
                    <Card.Title>Add product</Card.Title>
                    <Button variant="primary">+</Button>
                </Card.Body>
            </Card>
        )
    }
}