import React, { Component } from "react";
import { Nav } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import Products from './components/products/products.container';

export class OrderLines extends Component{

    componentDidMount(){
        this.props.loadOrderLine();
    }

    getCategories = () => {
        return this.props.categories.map(category => {
            return (
                <Nav.Item key={category.uuid}>
                    <Nav.Link onClick={() => this.handleCategoryTabClick(category.uuid)}>{category.name}</Nav.Link>
                </Nav.Item>
            )
        })
    }

    getProductsTab = () => {
        if(!this.props.products || this.props.products.length === 0){
            return null;
        }

        return (
            <Nav.Item className="category-nav-item">
                <Nav.Link onClick={() => this.handleCategoryTabClick("default")}>default</Nav.Link>
            </Nav.Item>
        )
    }
    
    handleCategoryTabClick = (id) => {
        this.props.history.push(`/users/dashboard/order-line/category/${id}/products`);
    }

    render(){
        return (
            <div className="published-order-line-container">
                <Nav variant="tabs">
                    {this.getProductsTab()}
                    {this.getCategories()}
                </Nav>
                <Switch>
                    <Route path="/users/dashboard/order-line/category/:id/products" component={Products} />
                </Switch>
            </div>
        )
    }
}