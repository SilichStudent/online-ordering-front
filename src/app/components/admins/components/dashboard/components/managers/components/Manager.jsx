import React, { Component } from 'react';

import { Button } from 'react-bootstrap';

export class Manager extends Component {

    handleDelete = (e) => {
        e.preventDefault();
        this.props.handleDelete(this.props.id);
    }

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
                    <Button variant="danger" onClick={this.handleDelete}>Delete</Button>
                </td>
            </tr>
        )
    }
}