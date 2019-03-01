import React, { Component } from 'react';
import { Form, Col, Row, Button, ButtonToolbar } from 'react-bootstrap';
import { Switch, Route} from 'react-router-dom';

import ChangeName from './components/change-name/change-name.container';
import ChangePassword from './components/change-password/change-password.container';

import './profile.scss'

export class Profile extends Component {

    handleChangeName = () => {
        this.props.history.push('/users/dashboard/profile/change-name');
    }

    handleChangePassword = () => {
        this.props.history.push('/users/dashboard/profile/change-password');
    }

    render() {
        return (
            <div className="profile-content">
                <div className="profile-menu">
                    <ButtonToolbar>
                        <Button variant="outline-info" onClick={this.handleChangeName}>Change name</Button>
                        <Button variant="outline-success" onClick={this.handleChangePassword}>Change password</Button>
                    </ButtonToolbar>
                </div>
                <div className="profile-info">
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Email:
                    </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue={this.props.currentUser.email} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Name:
                    </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue={this.props.currentUser.name} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Balance:
                    </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue={this.props.currentUser.balance} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Is blocked:
                    </Form.Label>
                        <Col sm="10">
                            <Form.Check
                                inline
                                disabled
                                checked={this.props.currentUser.isBlocked}
                            />
                        </Col>
                    </Form.Group>
                </div>
                <Switch>
                    <Route path="/users/dashboard/profile/change-name"  component={ChangeName}/>
                    <Route path="/users/dashboard/profile/change-password"  component={ChangePassword}/>
                </Switch>
            </div>
        )
    }
}