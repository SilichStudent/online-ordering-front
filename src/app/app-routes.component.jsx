import React from 'react'
import { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LoginComponent from './login/login.container'
import AdminsRoutes from './admins/admins.container'
import UsersRoutes from './users/users.container'
import { Header } from './components/Header'


export class Routes extends Component {

    render() {
        return (
            <div>
                <Header/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/admins" component={AdminsRoutes} />
                        <Route path="/users" component={UsersRoutes} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
