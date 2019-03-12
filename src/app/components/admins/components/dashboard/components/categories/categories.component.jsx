import React, { Component } from 'react';
import { Image, Nav } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';

import Products from './components/products/products.container';
import CreateCategory from './components/create-category/create-category.container';
import RenameCategory from './components/rename-category/rename-category.container';
import deleteIcon from '../../../../../../../common/static/delete.png'

import './categories.scss'

export class Categories extends Component {
    componentDidMount() {
        this.props.loadCategories();
    }

    getCategories = () => {
        return this.props.list.map(category => {
            return (
                <Nav.Item key={category.uuid}>
                    <Link to={`/admins/dashboard/categories/${category.uuid}/products`}>{category.name}</Link>
                    {/* <Nav.Link onClick={() => this.handleCategoryTabClick(category.uuid)}>{category.name}</Nav.Link> */}
                    {/* <Image className="delete-icon" src={deleteIcon} rounded/> */}
                </Nav.Item>
            )
        })
    }

    handleCategoryCreate = () => {
        this.props.history.push("/admins/dashboard/categories/create");
    }

    handleRenameCategory = () => {
        this.props.history.push("/admins/dashboard/categories/rename");
    }

    handleDeleteCategory = () => {
        this.props.deleteCategory(this.props.categoryKey);
    }

    handleCategoryTabClick = (id) => {
        this.props.history.push(`/admins/dashboard/categories/${id}/products`);
    }

    isNotCategory = () => {
        return this.props.categoryKey === 'default'
    }

    render() {

        if (this.props.loading) {
            return (<div>Loading...</div>);
        }

        return (
            <div className="categories-content">
                <Nav variant="tabs">
                    <Nav.Item className="category-nav-item">
                        <Nav.Link onClick={() => this.handleCategoryCreate()}>+</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="category-nav-item">
                        <Link to="/admins/dashboard/categories/default/products">default</Link>
                        {/* <Nav.Link href="/admins/dashboard/categories/default/products">default</Nav.Link> */}
                    </Nav.Item>
                    {this.getCategories()}
                </Nav>
                <Switch>
                    <Route path="/admins/dashboard/categories/create" component={CreateCategory} />
                    <Route path="/admins/dashboard/categories/rename" component={RenameCategory} />
                    <Route path="/admins/dashboard/categories/:id/products" component={Products} />
                </Switch>
            </div>
        )
    }
}