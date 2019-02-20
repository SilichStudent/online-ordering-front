import React, { Component } from 'react';
import { Tab } from 'react-bootstrap';

import { ProductsList } from './ProductsList'

export class CategoryTab extends Component {

    render() {
        console.log(this.prod.id);
        return (
            <Tab key={this.props.key} eventKey={this.props.id} title={this.props.name}>
                asdasd
                {/* <ProductsList products={this.products} /> */}
            </Tab>
        )
    }
}