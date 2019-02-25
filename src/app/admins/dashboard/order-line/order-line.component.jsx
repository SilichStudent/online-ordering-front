import React, { Component } from 'react';

import { OrderLine as OrderLineSingle } from './component/OrderLine'

import './order-line.scss'

export class OrderLine extends Component{


    componentDidMount() {
        this.props.loadOrderLines(this.props.limit, this.props.offset);
    }

    orderLinesList = () => {
        return this.props.list.map( orderLine => {
            return (<OrderLineSingle 
                key={orderLine.id} 
                id={orderLine.id}
                name={orderLine.name}
                description={orderLine.description}
                startTime={orderLine.startTime}
                endTime={orderLine.endTime}
                isActive={orderLine.isActive}
                published={orderLine.published}
                products={orderLine.products}
                categories={orderLine.categories}
            />)
        })
    }

    render(){
        return (
            <div>
                {this.orderLinesList()}
            </div>
        )
    }
}