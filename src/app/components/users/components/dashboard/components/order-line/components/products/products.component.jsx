import React, { Component } from "react";

import { ProductCard } from './components/ProductCard'

import './products.scss'

export class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryUuid: props.match.params.id
        }
    }

    componentDidMount() {
        if (this.state.categoryUuid === 'default') {
            this.props.loadOrderLine();
        } else {
            this.props.loadProducts(this.state.categoryUuid);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const categoryUuid = this.props.match.params.id;

        if (prevProps.match.params.id !== categoryUuid) {
            if (categoryUuid === 'default') {
                this.props.loadOrderLine();
            } else {
                this.props.loadProducts(categoryUuid);
            }
        }
    }

    getProductsList = () => {
        console.log(this.props.list);

        if (!this.props.list) {
            return null
        }

        return this.props.list.map(product => {
            return (<ProductCard key={product.uuid} name={product.name} description={product.description} image={product.image} uuid={product.uuid} handleAddProductToCard={this.handleAddProductToCard} />)
        })
    }

    handleAddProductToCard = (productUuid, quantity) => {
        this.props.addProductToCart({ productUuid, quantity });
    }

    render() {
        return (
            <div id="user-order-line-products-container">
                <div className="content-grid">
                    {this.getProductsList()}
                </div>
            </div>
        )
    }
}