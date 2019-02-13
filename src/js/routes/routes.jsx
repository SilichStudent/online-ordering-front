import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginComponent from '../components/login/login'
import AdminsRoutes from '../components/admins'

function IndexComponent() {
    return (<div>
        <h3>Lolololo</h3>
    </div>)
}

class Routes extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={IndexComponent} />
                    <Route path="/login" component={LoginComponent} />
                    <Route path="/admins" component={AdminsRoutes} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default connect(() => { return {} })(Routes);