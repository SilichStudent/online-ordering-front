import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'

import { Route, Switch } from 'react-router-dom'

import UserCreate from './user-create'

class AdminsUsersRoute extends Component{
    render(){
        return (
            <Switch>
                <Route path="/admins/users/create" component={UserCreate}/>
            </Switch>
        )
    }
}

function mapStateToProps( state ){
    return {};
}

export default connect(mapStateToProps)(AdminsUsersRoute);