import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import { CategoryTab } from './CategoryTab'
import {ProductsList} from './ProductsList'

export class CategoriesTree extends Component {
    getCategoriesTree = () => {
        return this.props.categories.map(category => {
            return (
                <Tab key={category.id} eventKey={category.id} title={category.name}>

                    <ProductsList products={category.products} />
                </Tab>
            )
            // return (<CategoryTab key={category.id} id={category.id} name={category.name} products={category.products} />)
        })
    }

    render() {
        console.log(this.props.categories);


        if (this.props.categories.length === 0) {
            return (<div></div>);
        }



        return (
            <Tabs
                defaultActiveKey={this.props.categories[0].id}
                id="uncontrolled-tab-example"
            >
                {this.getCategoriesTree()}
            </Tabs>
        )
    }
}