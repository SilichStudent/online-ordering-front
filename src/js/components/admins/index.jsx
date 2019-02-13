import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'

import { Route, Switch } from 'react-router-dom'

import UsersRoutes from './users'

class AdminRoutes extends Component{

    render(){

        return (
            <Switch>
                <Route path="/admins/users" component={UsersRoutes}/>
            </Switch>
        )
    }
}

function mapStateToProps( state ){
    return {};
}

export default connect(mapStateToProps)(AdminRoutes)