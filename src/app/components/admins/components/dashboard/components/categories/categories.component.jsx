import React, { Component } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import Products from './components/products/products.container';
import CreateCategory from './components/create-category/create-category.container';
import RenameCategory from './components/rename-category/rename-category.container';
// import deleteIcon from '../../../../../../../common/static/delete.png'

import './categories.scss'

export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: null
        }
    }

    componentDidMount() {
        this.props.loadCategories();
    }

    getCategories = () => {
        return this.props.list.map(category => {
            return (
                <Nav.Item key={category.uuid}>
                    <Nav.Link onClick={() => this.handleCategoryTabClick(category.uuid)}>{category.name}</Nav.Link>
                </Nav.Item>
            )
        })
    }

    handleCategoryCreate = () => {
        this.props.history.push("/admins/dashboard/categories/create");
    }

    handleRenameCategory = () => {
        this.props.history.push(`/admins/dashboard/categories/${this.state.selectedCategory}/rename`);
    }

    handleDeleteCategory = () => {
        this.props.deleteCategory(this.state.selectedCategory);
    }

    handleCategoryTabClick = (id) => {
        this.setState({
            selectedCategory: id
        });
        this.props.history.push(`/admins/dashboard/categories/${id}/products`);
    }

    isMenuDisabled = () => {
        return !this.state.selectedCategory || this.state.selectedCategory === 'default'
    }

    render() {

        if (this.props.loading) {
            return (<div>Loading...</div>);
        }

        return (
            <div id="admins-categories-content">
                <div className="toolbar">
                    <Button variant="outline-info" onClick={this.handleRenameCategory} disabled={this.isMenuDisabled()}>Rename</Button>
                    <Button variant="outline-danger" onClick={this.handleDeleteCategory} disabled={this.isMenuDisabled()}>Delete</Button>
                </div>
                <Nav variant="tabs">
                    <Nav.Item className="category-nav-item">
                        <Nav.Link onClick={() => this.handleCategoryCreate()}>+</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="category-nav-item">
                        <Nav.Link onClick={() => this.handleCategoryTabClick("default")}>default</Nav.Link>
                    </Nav.Item>
                    {this.getCategories()}
                </Nav>
                <Switch>
                    <Route path="/admins/dashboard/categories/create" component={CreateCategory} />
                    <Route path="/admins/dashboard/categories/:id/rename" component={RenameCategory} />
                    <Route path="/admins/dashboard/categories/:id/products" component={Products} />
                </Switch>
            </div>
        )
    }
}