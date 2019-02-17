import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import AdminUsers from './users/users.container';
import { Nav } from 'react-bootstrap';

import './dashboard.scss'

export class Dashboard extends Component {

    render() {
        return (
            // here change to component 
            <div className='dashboard'>
                <div className='menu-list'>
                    <Nav  className="flex-column">
                        <Nav.Link>Users</Nav.Link>
                        <Nav.Link>Products</Nav.Link>
                        <Nav.Link>Order line</Nav.Link>
                    </Nav>
                </div>
                <div className='content'>
                    <Switch>
                        <Route path='/admins/dashboard/users' component={AdminUsers} />
                        <Route path='/admins/dashboard/products' component={null} />
                        <Route path='/admins/dashboard/order-line' component={null} />
                    </Switch>
                </div>
            </div>
        )
    }
}