import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import {User} from './User'

export class UserList extends Component {
    
    render() {
        console.log(this.props.users);
        return (
            <div className='users-table'>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created date</th>
                            <th>is blocked</th>
                            <th>balance</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map(user => {
                            return (<User
                                key={user.id}
                                id={user.id}
                                name={user.name}
                                email={user.email}
                                createdDate={user.createdDate}
                                balance={user.balance}
                                isBlocked={user.isBlocked} 
                                handleSave={this.props.handleSave}
                                handleDelete={this.props.handleDelete}
                                />)
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}