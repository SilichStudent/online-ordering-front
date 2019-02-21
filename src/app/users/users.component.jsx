import React from 'react'
import { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

import UserDashboard from './dashboard/dashboard.container'


export class UserRoutes extends Component{

    render(){

        return (
            <Switch>
                <Route path="/users/dashboard" component={UserDashboard}/>
            </Switch>
        )
    }
}