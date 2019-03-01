import React from 'react'
import { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

import AdminDashboard from './components/dashboard/dashboard.container'
import AdminLogin from './components/login/admin-login.container'


export class AdminRoutes extends Component{

    render(){

        return (
            <Switch>
                <Route path="/admins/dashboard" component={AdminDashboard}/>
                <Route path="/admins/login" component={AdminLogin}/>
            </Switch>
        )
    }
}