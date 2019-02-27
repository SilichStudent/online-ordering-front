import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

import UserDashboard from './dashboard/dashboard.container'
import UsersLogin from './login/user-login.container'


export class UserRoutes extends Component{

    render(){

        return (
            <Switch>
                <Route path="/users/dashboard" component={UserDashboard}/>
                <Route path="/users/login" component={UsersLogin}/>
            </Switch>
        )
    }
}