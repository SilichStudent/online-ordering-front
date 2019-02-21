import React, { Component } from 'react';

import { Button, InputGroup } from 'react-bootstrap';

export class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBlocked: props.isBlocked
        }
    }

    handleCheckbox = () => {
        this.setState({
            isBlocked: !this.state.isBlocked
        })
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.name}
                </td>
                <td>
                    {this.props.email}
                </td>
                <td>
                    {new Date(this.props.createdDate).toLocaleDateString()}
                </td>
                <td>
                    <input type="checkbox" defaultChecked={this.state.isBlocked} onChange={this.handleCheckbox} />
                </td>
                <td>
                    <input type="number" defaultValue={this.props.balance}/>
                </td>
                <td>
                    <Button variant="info">Save</Button>
                </td>
                <td>
                    <Button variant="danger">Delete</Button>
                </td>
            </tr>
        )
    }
}