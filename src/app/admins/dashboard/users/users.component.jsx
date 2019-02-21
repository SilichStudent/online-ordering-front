import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import UserCreate from './user-create/user-create.container';
import { UserList } from './components/UserList';

export class AdminsUsersRoute extends Component {

    componentDidMount() {
        this.props.loadUsers( this.props.limit, this.props.offset);
    }

    createUser = () => {
        this.props.history.push('/admins/dashboard/users/create');
    }

    handleSave = (id, isBlocked, balance) => {
        this.props.updateUser(id, isBlocked, balance);
        this.props.history.push('/admins/dashboard/users');
    }

    handleDelete = (id) => {
        this.props.deleteUser(id);
        this.props.history.push('/admins/dashboard/users');
    }



    render() {
        if (this.props.loading) {
            return (<div>Loading</div>);
        }

        return (
            <div>
                <Button variant="outline-success" onClick={this.createUser}>+ New</Button>
                <UserList users={this.props.list} handleSave={this.handleSave} handleDelete={this.handleDelete}/>
                <Switch>
                    <Route path="/admins/dashboard/users/create" component={UserCreate} />
                </Switch>
            </div>
        )
    }
}