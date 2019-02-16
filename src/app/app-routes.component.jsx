import React from 'react'
import { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LoginComponent from './login/login.container'
import AdminsRoutes from './admins/admins.container'


export class Routes extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LoginComponent} />
                    <Route path="/login" component={LoginComponent} />
                    <Route path="/admins" component={AdminsRoutes} />
                </Switch>
            </BrowserRouter>
        )
    }
}
