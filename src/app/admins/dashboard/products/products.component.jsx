import React, { Component } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';

import { ProductsList } from './components/ProductsList'

import './products.scss'

export class Products extends Component {
    componentDidMount() {
        this.props.loadCategoriesTree(this.props.limit, this.props.offset);
    }

    getCategoriesTree = () => {
        return this.props.list.map(category => {
            return (
                <Tab key={category.id} eventKey={category.id} title={category.name}>
                    <ProductsList products={category.products} />
                </Tab>
            )
        })
    }

    render() {

        if (this.props.list.length === 0 || this.props.loading) {
            return (<div>Loading...</div>);
        }

        return (
            <div>
                <div className="category-menu">
                    <Button variant="info">Rename</Button>
                    <Button variant="danger">Delete</Button>
                </div>
                <Tabs
                    defaultActiveKey={this.props.list[0].id}
                    id="uncontrolled-tab-example"
                >
                    {this.getCategoriesTree()}
                    <Tab title='+' />
                </Tabs>
            </div>
        )
    }
}