import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

import { CategoriesTree } from './components/CategoriesTree'

export class Products extends Component {
    // componentDidMount() {
    //     this.props.loadCategoriesTree(this.props.limit, this.props.offset);
    // }

    render() {
        return (
            <CategoriesTree categories={this.props.list} />
        )
    }
}