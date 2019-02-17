import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import UserCreate from './user-create/user-create.container';
import { UserList } from './components/UserList'

export class AdminsUsersRoute extends Component {

    componentDidMount() {
        this.props.loadUsers()
    }

    createUser = () => {
        this.props.history.push('/admins/dashboard/users/create')
    }

    render() {

        console.log("OPOPOPOPOP");
        

        if (this.props.loading) {
            return (<div>Loading</div>)
        }

        return (
            <div>
                <Button variant="outline-success" onClick={this.createUser}>+ New</Button>
                <UserList users={this.props.list} />
                <Switch>
                    <Route path="/admins/dashboard/users/create" component={UserCreate} />
                </Switch>
            </div>
        )
    }
}