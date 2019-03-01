import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

import { ProductCard } from './ProductCard'

export class ProductsList extends Component {
    getProductsList = () => {
        if(!this.props.products){
            return null
        }

        return this.props.products.map(product => {
            return (<ProductCard key={product.id} name={product.name} description={product.description} image={product.image} id={product.id} handleDeleteProduct={this.props.handleDeleteProduct}/>)
        })
    }

    render() {
        return (
            <div className="content-grid">
                {this.getProductsList()}
                <div className='card-wrapper'>
                    <Card>
                        <Card.Body>
                            <Card.Title>Add product</Card.Title>
                            <Button variant="primary" onClick={this.props.handleProductCreate}>+</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}