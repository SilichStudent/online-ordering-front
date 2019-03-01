import React, { Component } from 'react';
import { Card, Tab, Tabs } from 'react-bootstrap'

export class OrderLine extends Component {

    getProducts = (products) => {
        return products.map(product => {
            return (
                <Card key={product.id}>
                    <Card.Img variant="top" src={product.image} style={{ height: '120px', width: '100%' }} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{product.description}</Card.Subtitle>
                    </Card.Body>
                </Card>
            )
        })
    }

    getCategoriesTabs = () => {
        const tabs = [];

        this.props.categories.forEach(category => {
            tabs.push(
                <Tab eventKey={category.id} title={category.name}>
                    <div className="order-line-products-wrapper">
                        {this.getProducts(category.products)}
                    </div>
                </Tab>
            )
        });

        tabs.push((
            <Tab eventKey="No category" title="Products">
                    <div className="order-line-products-wrapper">
                        {this.getProducts(this.props.products)}
                    </div>
                </Tab>
        ))

        return tabs;
    }

    render() {
        return (
            <Card style={{ width: '100%' }}>
                <Card.Body style={{ display: 'flex' }}>
                    <div className='order-line-info-warpper' style={{ width: '40%' }}>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.description}</Card.Subtitle>
                        <div><b>Start date:</b> {new Date(this.props.startTime).toLocaleString()}</div>
                        <div><b>End date:</b> {new Date(this.props.endTime).toLocaleString()}</div>
                        <div><b>Is active:</b> <input type="checkbox" defaultChecked={this.props.isActive} /></div>
                        <div><b>Published:</b> <input type="checkbox" defaultChecked={this.props.published} /></div>
                    </div>
                    <div className='online-order-items' style={{ width: '60%', height: '100%' }}>
                        {/* here need to do tab with categories and products*/}
                        <Tabs id="uncontrolled-tab-example">
                            {this.getCategoriesTabs()}
                        </Tabs>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}