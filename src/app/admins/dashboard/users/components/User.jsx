import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBlocked: props.isBlocked,
            balance: props.balance
        }
    }

    handleCheckbox = () => {
        this.setState({
            isBlocked: !this.state.isBlocked
        })
    }

    handleBalance = (e) => {
        this.setState({
            balance: e.target.value
        })
    }

    handleSave = (e) => {
        e.preventDefault();
        this.props.handleSave(this.props.id, this.state.isBlocked, this.state.balance);
    }

    handleDelete = (e) => {
        e.preventDefault();
        this.props.handleDelete(this.props.id);
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
                    <input type="number" name="price" defaultValue={this.props.balance || 0} onChange={this.handleBalance} step=".1" />
                </td>
                <td>
                    <Button variant="info" onClick={this.handleSave}>Save</Button>
                </td>
                <td>
                    <Button variant="danger" onClick={this.handleDelete}>Delete</Button>
                </td>
            </tr>
        )
    }
}