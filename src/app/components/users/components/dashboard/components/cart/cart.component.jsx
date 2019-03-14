import React, { Component } from "react";
import { Button } from 'react-bootstrap';

import { ProductCard } from './components/ProductCard'

import './cart.scss'

export class UserCart extends Component {

    componentDidMount() {
        this.props.loadCart();
    }

    getProductsList = () => {
        console.log(this.props.products);

        if (!this.props.products) {
            return null
        }

        return this.props.products.map(product => {
            return (<ProductCard key={product.uuid} name={product.name} description={product.description} image={product.image} uuid={product.uuid} quantity={product.quantity} />)
        })
    }

    handleCheckout = () => {
        this.props.checkout(this.props.products);
    }


    render() {
        return (
            <div id="user-cart-container">
                <div className="toolbar">
                    <Button variant="outline-info" onClick={this.handleCheckout}>Checkout</Button>
                </div>
                <div className="content-grid">
                    {this.getProductsList()}
                </div>
            </div>
        )
    }
}