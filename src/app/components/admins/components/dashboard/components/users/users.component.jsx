import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import UserCreate from './components/user-create/user-create.container';
import { UserList } from './components/UserList';

import './users.scss'

export class AdminsUsersRoute extends Component {

    componentDidMount() {
        this.props.loadUsers(this.props.limit, this.props.offset);
    }

    createUser = () => {
        this.props.history.push('/admins/dashboard/users/create');
    }

    handleSave = (uuid, isBlocked, balance) => {
        this.props.updateUser(uuid, isBlocked, balance);
        this.props.history.push('/admins/dashboard/users');
    }

    handleDelete = (uuid) => {
        this.props.deleteUser(uuid);
        this.props.history.push('/admins/dashboard/users');
    }



    render() {
        if (this.props.loading) {
            return (<div>Loading</div>);
        }

        return (
            <div>
                <div className="users-menu">
                    <Button variant="outline-success" onClick={this.createUser}>+ New</Button>
                </div>
                <UserList users={this.props.list} handleSave={this.handleSave} handleDelete={this.handleDelete} />
                <Switch>
                    <Route path="/admins/dashboard/users/create" component={UserCreate} />
                </Switch>
            </div>
        )
    }
}