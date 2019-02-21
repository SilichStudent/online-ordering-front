import React from 'react'
import { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

import AdminDashboard from './dashboard/dashboard.container'


export class AdminRoutes extends Component{

    render(){

        return (
            <Switch>
                <Route path="/admins/dashboard" component={AdminDashboard}/>
            </Switch>
        )
    }
}