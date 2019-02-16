import React from 'react'
import { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

import UserCreate from './user-create/user-create.container'

export class AdminsUsersRoute extends Component{
    render(){
        return (
            <Switch>
                <Route path="/admins/users/create" component={UserCreate}/>
            </Switch>
        )
    }
}