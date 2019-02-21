import React, { Component } from 'react';
import { Tabs, Button } from 'react-bootstrap';

import './order-line.scss'

export class OrderLine extends Component{
    render(){
        return (
            <div>
                <div className="order-line-menu">
                    <Button variant="success">Add product</Button>
                    <Button variant="info">Add category</Button>
                </div>
                <Tabs
                    id="uncontrolled-tab-example"
                >
                    {null}
                </Tabs>
            </div>
        )
    }
}