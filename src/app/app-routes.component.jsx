import React from 'react'
import { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import IndexComponent from './components/index-page/index-page.container'
import UserLoginComponent from './components/users/components/login/user-login.container'
import AdminsRoutes from './components/admins/admins.container'
import UsersRoutes from './components/users/users.container'
import { Header } from './components/header/Header'

import '../common/styles/index.scss'

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
