import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

import { ProductCard } from './ProductCard'

export class ProductsList extends Component {
    getProductsList = () => {
        return this.props.products.map(product => {
            return (<ProductCard  key={product.id} name={product.name} description={product.description} image={product.image} id={this.props.id} />)
        })
    }

    render() {
        return (
            <div style={{ display: 'flex' , flexWrap:'wrap'}}>
                {this.getProductsList()}
                <Card style={{ width: '18rem', height: '300px' }}>
                    <Card.Body>
                        <Card.Title>Add product</Card.Title>
                        <Button variant="primary">+</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}