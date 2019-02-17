import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import AdminUsers from './users/users.container';
import AdminManagers from './managers/managers.container';
import AdminProducts from './products/products.container'

import './dashboard.scss'

export class Dashboard extends Component {

    onUsersSelect = () =>{
        this.props.history.push('/admins/dashboard/users')
    }

    onManagersSelect = () =>{
        this.props.history.push('/admins/dashboard/managers')
    }

    onProductsSelect = () =>{
        this.props.history.push('/admins/dashboard/products')
    }

    onOrderLineSelect = () =>{
        this.props.history.push('/admins/dashboard/order-line')
    }

    render() {
        return (
            // here change to component 
            <div className='dashboard'>
                <div className='menu-list'>
                    <Nav  className="flex-column">
                        <Nav.Link  onClick={this.onUsersSelect}>Users</Nav.Link>
                        <Nav.Link  onClick={this.onManagersSelect}>Managers</Nav.Link>
                        <Nav.Link  onClick={this.onProductsSelect}>Products</Nav.Link>
                        <Nav.Link  onClick={this.onOrderLineSelect}>Order line</Nav.Link>
                    </Nav>
                </div>
                <div className='content'>
                    <Switch>
                        <Route path='/admins/dashboard/users' component={AdminUsers} />
                        <Route path='/admins/dashboard/managers' component={AdminManagers} />
                        <Route path='/admins/dashboard/products' component={AdminProducts} />
                        <Route path='/admins/dashboard/order-line' component={null} />
                    </Switch>
                </div>
            </div>
        )
    }
}