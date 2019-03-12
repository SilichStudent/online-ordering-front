import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import { ProductCard } from './components/ProductCard'
import CreateProduct from './components/create-product/create-product.container'
import plusImage from '../../../../../../../../../common/static/plus.png'

import './products.scss'

export class Products extends Component{

    constructor(props){
        super(props);
        this.state ={
            categoryUuid: props.match.params.id
        }
    }

    componentDidMount(){
        this.props.loadProducts(this.state.categoryUuid);
    }


    getProductsList = () => {
        if(!this.props.products){
            return null
        }

        return this.props.products.map(product => {
            return (<ProductCard key={product.uuid} name={product.name} description={product.description} image={product.image} uuid={product.uuid} handleDeleteProduct={this.props.handleDeleteProduct}/>)
        })
    }

    handleCreateProduct = () => {
        this.props.history.push(`/admins/dashboard/categories/${this.state.categoryUuid}/products/create`);
    }

    render(){
        return (
            <div className="content-grid">
                {this.getProductsList()}
                <div className='card-wrapper'>
                    <Card >
                        <Card.Body>
                            <Button variant="link" onClick={this.handleCreateProduct}>
                                <img className="add-product-image" alt="add product" src={plusImage} onClick={this.handleCreateProduct}/>
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <Switch>
                    <Route path="/admins/dashboard/categories/:id/products/create" component={CreateProduct}/>
                </Switch>
            </div>
        )
    }

}