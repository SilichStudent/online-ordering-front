import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';


import './dashboard.scss'

export class Dashboard extends Component {

    onEditSelect = () =>{
        this.props.history.push('/users/dashboard/edit')
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
        return (
            // here change to component 
            <div className='dashboard'>
                <div className='menu-list'>
                    <Navbar expand='sm'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id='basic-nav=bar'>
                            <Nav className='flex-column'>
                                <Nav.Link  onClick={this.onEditSelect}>Name</Nav.Link>
                                <Nav.Link  onClick={this.onHistorySelect}>Products</Nav.Link>
                                <Nav.Link  onClick={this.onCardSelect}>Card</Nav.Link>
                                <Nav.Link  onClick={this.onHistorySelect}>History</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div className='content'>
                    <Switch>
                        <Route path='/users/dashboard/edit' component={null} />
                        <Route path='/users/dashboard/products' component={null} />
                        <Route path='/users/dashboard/card' component={null} />
                        <Route path='/users/dashboard/history' component={null} />
                    </Switch>
                </div>
            </div>
        )
    }
}