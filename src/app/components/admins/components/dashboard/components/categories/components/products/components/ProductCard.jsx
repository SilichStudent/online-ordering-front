import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export class ProductCard extends Component {

    handelDelete = () => {
        this.props.handleDeleteProduct(this.props.uuid);
    }

    render() {
        return (
            <div className='card-wrapper'>
                <Card>
                    <div></div>
                    <Card.Img variant="top" src={this.props.image} style={{ height: '120px', width: '100%' }} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>
                        <Button variant="primary" className="card-button">Edit</Button>
                        <Button variant="danger" className="card-button" onClick={this.handelDelete}>Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}