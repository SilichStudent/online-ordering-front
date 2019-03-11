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
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map(user => {
                            return (<Manager key={user.uuid} uuid={user.uuid} email={user.email} createdDate={user.createdDate} handleDelete={this.props.handleDelete}/>)
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}