import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { User } from './User'

export class UserList extends Component {
    render() {
        return (
            <div className='users-table'>
                <Table striped bordered hover>
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
                                name={user.name}
                                email={user.email}
                                createdDate={user.createdDate}
                                balance={user.balance}
                                isBlocked={user.isBlocked} />)
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}