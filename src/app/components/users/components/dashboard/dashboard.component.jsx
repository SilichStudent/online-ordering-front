import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Nav, Navbar } from 'react-bootstrap';

import Profile from './components/profile/profile.container';
import OrderLine from './components/order-line/order-line.container';
import UserCart from './components/cart/cart.container';
import * as tokenService from '../../../../../common/services/token.service';

import './dashboard.scss'

export class Dashboard extends Component {
    isHavePermissions() {
        return tokenService.getUserToken() && this.props.currentUser && this.props.currentUser.uuid;
    }

    onEditSelect = () => {
        this.props.history.push('/users/dashboard/profile')
    }

    onOrderLineSelect = () => {
        this.props.history.push('/users/dashboard/order-line')
    }

    onCardSelect = () => {
        this.props.history.push('/users/dashboard/cart')
    }

    onHistorySelect = () => {
        this.props.history.push('/users/dashboard/history')
    }

    getQuantity = () => {
        if (this.props.cartProductsQuantity < 1) {
            return null;
        }

        return this.props.cartProductsQuantity;
    }

    render() {
        if (!this.isHavePermissions()) {
            return <Redirect to='/users/login' />
        }

        return (
            <div id='users-dashboard'>
                <div className='menu-list'>
                    <Navbar expand='sm'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id='basic-nav=bar'>
                            <Nav className='flex-column'>
                                <Nav.Link onClick={this.onEditSelect}>{this.props.currentUser.name}</Nav.Link>
                                <Nav.Link onClick={this.onOrderLineSelect}>Order line</Nav.Link>
                                <Nav.Link onClick={this.onCardSelect}>Cart <div className="cart-products-quantity">{this.getQuantity()}</div></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div className='content'>
                    <Switch>
                        <Route path='/users/dashboard/profile' component={Profile} />
                        <Route path='/users/dashboard/order-line' component={OrderLine} />
                        <Route path='/users/dashboard/cart' component={UserCart} />
                    </Switch>
                </div>
            </div>
        )
    }
}