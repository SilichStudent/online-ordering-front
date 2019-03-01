import React, { Component } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import { ProductsList } from './components/ProductsList'
import CreateCategory from './components/create-category/create-category.container'
import CreateProduct from './components/create-product/create-product.container'
import RenameCategory from './components/rename-category/rename-category.container'

import './products.scss'

export class Products extends Component {
    componentDidMount() {
        this.props.loadCategoriesTree(this.props.limit, this.props.offset);
    }

    getCategoriesTree = () => {
        return this.props.list.map(category => {
            return (
                <Tab key={category.id} eventKey={category.id} title={category.name}>
                    <ProductsList products={category.products} handleProductCreate={this.handleProductCreate} handleDeleteProduct={this.handleDeleteProduct}/>
                </Tab>
            )
        })
    }

    handleCategoryCreate = () => {
        this.props.history.push("/admins/dashboard/products/category/create");
    }

    handleProductCreate = () => {
        this.props.history.push("/admins/dashboard/products/create");
    }

    handleTabSelect = (key) => {
        this.props.selectCategoryTab(key);
    }

    handleRenameCategory = () => {
        this.props.history.push("/admins/dashboard/products/category/rename");
    }

    handleDeleteCategory = () => {
        this.props.deleteCategory(this.props.categoryKey);
    }

    handleDeleteProduct = (id) => {
        this.props.deleteProduct(id);
    }

    isDefault = () => {
        return this.props.categoryKey === 'default';
    }

    render() {

        if (this.props.list.length === 0 || this.props.loading) {
            return (<div>Loading...</div>);
        }

        return (
            <div>
                <div className="category-menu">
                    <Button variant="info" onClick={this.handleRenameCategory} disabled={this.isDefault()}>Rename</Button>
                    <Button variant="danger" onClick={this.handleDeleteCategory} disabled={this.isDefault()}>Delete</Button>
                </div>
                <Tabs
                    defaultActiveKey={this.props.list[0].id}
                    id="uncontrolled-tab-example"
                    onSelect={this.handleTabSelect}
                >
                    {this.getCategoriesTree()}
                    <Tab title='+' eventKey="add_category">
                        <CreateCategory />
                    </Tab>
                </Tabs>
                <Switch>
                    <Route path="/admins/dashboard/products/create" component={CreateProduct} />
                    <Route path="/admins/dashboard/products/category/rename" component={RenameCategory} />
                </Switch>
            </div>
        )
    }
}