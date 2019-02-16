import React from 'react'
import { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

import UsersRoutes from './users/users.container'

export class AdminRoutes extends Component{

    render(){

        return (
            <Switch>
                <Route path="/admins/users" component={UsersRoutes}/>
            </Switch>
        )
    }
}