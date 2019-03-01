import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Nav, Navbar } from 'react-bootstrap';

import Profile from './components/profile/profile.container';
import * as tokenService from '../../../../../common/services/token.service';

import './dashboard.scss'

export class Dashboard extends Component {

    
    isHavePermissions(){
        return tokenService.getUserToken() && this.props.currentUser && this.props.currentUser.id;
    }

    onEditSelect = () =>{
        this.props.history.push('/users/dashboard/profile')
    }

    onHistorySelect = () =>{
        this.props.history.push('/users/dashboard/products')
    }

    onCardSelect = () =>{
        this.props.history.push('/users/dashboard/card')
    }

    onHistorySelect = () =>{
        this.props.history.push('/users/dashboard/history')
    }
    

    render() {
        if(!this.isHavePermissions()){
            return <Redirect to='/users/login'/>
        }
        
        return (
            <div className='dashboard'>
                <div className='menu-list'>
                    <Navbar expand='sm'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id='basic-nav=bar'>
                            <Nav className='flex-column'>
                                <Nav.Link  onClick={this.onEditSelect}>{this.props.currentUser.name}</Nav.Link>
                                <Nav.Link  onClick={this.onHistorySelect}>Products</Nav.Link>
                                <Nav.Link  onClick={this.onCardSelect}>Card</Nav.Link>
                                <Nav.Link  onClick={this.onHistorySelect}>History</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div className='content'>
                    <Switch>
                        <Route path='/users/dashboard/profile' component={Profile} />
                        <Route path='/users/dashboard/products' component={null} />
                        <Route path='/users/dashboard/card' component={null} />
                        <Route path='/users/dashboard/history' component={null} />
                    </Switch>
                </div>
            </div>
        )
    }
}