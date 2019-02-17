import React, { Component } from 'react';

import { Button } from 'react-bootstrap';

export class Manager extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.email}
                </td>
                <td>
                    {this.props.createdDate}
                </td>
                <td>
                    <Button variant="info">Edit</Button>
                </td>
                <td>
                    <Button variant="danger">Delete</Button>
                </td>
            </tr>
        )
    }
}