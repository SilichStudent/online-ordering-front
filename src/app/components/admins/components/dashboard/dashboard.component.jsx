import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import AdminUsers from './components/users/users.container';
import AdminManagers from './components/managers/managers.container';
import AdminCategories from './components/categories/categories.container'
import AdminOrderLine from './components/order-line/order-line.container'

import * as tokenService from '../../../../../common/services/token.service';

import './dashboard.scss'

export class Dashboard extends Component {

    isHavePermissions(){
        return tokenService.getManagerToken() && this.props.currentManager && this.props.currentManager.uuid;
    }


    onUsersSelect = () =>{
        this.props.history.push('/admins/dashboard/users');
    }

    onManagersSelect = () =>{
        this.props.history.push('/admins/dashboard/managers');
    }

    onProductsSelect = () =>{
        this.props.history.push('/admins/dashboard/categories');
    }

    onOrderLineSelect = () =>{
        this.props.history.push('/admins/dashboard/order-line');
    }

    render() {

        if(!this.isHavePermissions()){
            return <Redirect to='/admins/login'/>
        }

        return (
            // here change to component 
            <div className='dashboard'>
                <div className='menu-list'>
                    <Navbar expand='sm'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id='basic-nav=bar'>
                            <Nav className='flex-column'>
                                <Nav.Link  onClick={this.onUsersSelect}>Users</Nav.Link>
                                <Nav.Link  onClick={this.onManagersSelect}>Managers</Nav.Link>
                                <Nav.Link  onClick={this.onProductsSelect}>Products</Nav.Link>
                                <Nav.Link  onClick={this.onOrderLineSelect}>Order line</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div className='content'>
                    <Switch>
                        <Route path='/admins/dashboard/users' component={AdminUsers} />
                        <Route path='/admins/dashboard/managers' component={AdminManagers} />
                        <Route path='/admins/dashboard/categories' component={AdminCategories} />
                        <Route path='/admins/dashboard/order-line' component={AdminOrderLine} />
                    </Switch>
                </div>
            </div>
        )
    }
}