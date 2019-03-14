import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export class ProductCard extends Component {

    handelAddToCart = () => {
        if (!this.state.quantity) {
            return
        }
        this.props.handleAddProductToCard(this.props.uuid, this.state.quantity);
    }

    handleQuantity = (e) => {
        console.log(e.target.value);
        
        this.setState({
            quantity: e.target.value
        })
    }

    render() {
        return (
            <div className='user-order-line-products card-wrapper'>
                <Card>
                    <div></div>
                    <Card.Img variant="top" src={this.props.image} style={{ height: '120px', width: '100%' }} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>
                        <input className="quantity" type="number" min="0" defaultValue={this.props.quantity} onChange={this.handleQuantity}/>
                        <Button variant="primary" className="card-button" onClick={this.handelAddToCart}>Add</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}