import React from 'react'
import { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import IndexComponent from './components/index-page/index-page.container'
import UserLoginComponent from './users/login/user-login.container'
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
                        <Route exact path="/" component={IndexComponent} />
                        <Route path="/login" component={UserLoginComponent} />
                        <Route path="/admins" component={AdminsRoutes} />
                        <Route path="/users" component={UsersRoutes} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
