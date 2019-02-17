import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Manager } from './Manager'

export class ManagersList extends Component {
    render() {
        return (
            <div className='users-table'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Created date</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map(user => {
                            return (<Manager key={user.id} email={user.email} createdDate={user.createdDate} />)
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}