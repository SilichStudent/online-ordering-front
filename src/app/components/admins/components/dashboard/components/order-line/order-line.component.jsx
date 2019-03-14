import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import { OrderLine as OrderLineSingle } from './component/OrderLine'
import OrderLineCreate from './component/create-order-line/create-order-line.container'
import OrderLineEdit from './component/edit-order-line/edit-order-line.container'

import './order-line.scss'

export class OrderLine extends Component {


    componentDidMount() {
        this.props.loadOrderLines(this.props.limit, this.props.offset);
    }

    orderLinesList = () => {
        return this.props.list.map(orderLine => {
            return (<OrderLineSingle
                key={orderLine.uuid}
                uuid={orderLine.uuid}
                name={orderLine.name}
                description={orderLine.description}
                startTime={orderLine.startTime}
                endTime={orderLine.endTime}
                isActive={orderLine.isActive}
                published={orderLine.published}
                products={orderLine.products}
                categories={orderLine.categories}
                handleEditButtonClick={this.handleEditButtonClick}
                handleDeleteButtonClick={this.handleDeleteButtonClick}
            />)
        })
    }

    onCreateSubmit = (e) => {
        e.preventDefault();
        this.props.history.push("/admins/dashboard/order-line/create")
    }

    handleEditButtonClick = (uuid) => {
        this.props.history.push(`/admins/dashboard/order-line/${uuid}/update`)
    }

    handleDeleteButtonClick = (uuid) => {
        this.props.deleteOrderLine(uuid);
    }

    render() {
        return (
            <div id="admin-order-line-container">
                <div className="order-line-menu">
                    <Button variant="success" onClick={this.onCreateSubmit}>+ Create</Button>
                </div>
                <div>
                    {this.orderLinesList()}
                </div>
                <Switch>
                    <Route path="/admins/dashboard/order-line/create" component={OrderLineCreate}/>
                    <Route path="/admins/dashboard/order-line/:id/update" component={OrderLineEdit}/>
                </Switch>
            </div>
        )
    }
}