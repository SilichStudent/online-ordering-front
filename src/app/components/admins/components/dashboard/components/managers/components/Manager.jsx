import React, { Component } from 'react';

import { Button } from 'react-bootstrap';

export class Manager extends Component {

    handleDelete = (e) => {
        e.preventDefault();
        this.props.handleDelete(this.props.uuid);
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.email}
                </td>
                <td>
                    {new Date(this.props.createdDate).toLocaleDateString()}
                </td>
                <td>
                    <Button variant="danger" onClick={this.handleDelete}>Delete</Button>
                </td>
            </tr>
        )
    }
}