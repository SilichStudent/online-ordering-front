import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ManagersList } from './components/ManagersList';
import ManagerCreate from './components/manager-create/manager-create.container'

import './managers.scss'

export class AdminsManagersRoute extends Component {

    componentDidMount() {
        this.props.loadManagers(this.props.limit, this.props.offset);
    }

    createManagers = () => {
        this.props.history.push('/admins/dashboard/managers/create');
    }

    handleDelete = (id) => {
        this.props.deleteManager(id);
        this.props.history.push('/admins/dashboard/managers');
    }

    render() {
        if (this.props.loading) {
            return (<div>Loading</div>);
        }

        return (
            <div>
                <div className="managers-menu">
                    <Button variant="outline-success" onClick={this.createManagers}>+ New</Button>
                </div>
                <ManagersList users={this.props.list} handleDelete={this.handleDelete} />
                <Switch>
                    <Route path="/admins/dashboard/managers/create" component={ManagerCreate} />
                </Switch>
            </div>
        )
    }
}