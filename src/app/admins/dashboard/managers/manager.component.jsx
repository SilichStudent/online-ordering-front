import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import UserCreate from './user-create/user-create.container';
import { ManagersList } from './components/ManagersList';

export class AdminsManagersRoute extends Component {

    componentDidMount() {
        this.props.loadManagers( this.props.limit, this.props.offset);
    }

    createManagers = () => {
        this.props.history.push('/admins/dashboard/managers/create');
    }

    render() {
        if (this.props.loading) {
            return (<div>Loading</div>);
        }

        return (
            <div>
                <Button variant="outline-success" onClick={this.createManagers}>+ New</Button>
                <ManagersList users={this.props.list} />
                <Switch>
                    <Route path="/admins/dashboard/managers/create" component={null} />
                </Switch>
            </div>
        )
    }
}