import React from 'react'
import { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

import UsersRoutes from './dashboard/users/users.container'
import AdminDashboard from './dashboard/dashboard.container'


export class AdminRoutes extends Component{

    render(){

        return (
            <Switch>
                <Route path="/admins/users" component={UsersRoutes}/>
                <Route path="/admins/dashboard" component={AdminDashboard}/>
            </Switch>
        )
    }
}