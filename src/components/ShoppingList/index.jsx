import React, { Component } from 'react';
import { Button, ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';
import { store } from '../../store';
import TotalPrice from './TotalPrice';
import { _removeFromCart } from './../../actions';

const spanStyle = {
    fontSize: '12pt',
    marginLeft: '20px'
}

class ShoppingList extends Component {
    constructor() {
        super();
        this.state = {
            cart: []
        }

        store.subscribe(() => {
            this.setState({
                cart: store.getState().cart
            })
        });
    }

    removeFromCart = product => {
        store.dispatch(_removeFromCart(product));
    }

    getCartItems = () => {
        const { cart } = this.state;
        return cart.map((product, index) => {
            const { title } = product;
            return (
                <ListGroupItem key={index}>
                    <Button bsStyle="danger" onClick={() => this.removeFromCart(product)}>
                        <Glyphicon glyph="glyphicon glyphicon-remove"/>
                    </Button>
                    <span style={spanStyle}>{ `${title}` }</span>
                </ListGroupItem>
            )
        });
    }

    render() {
        const { cart } = this.state;

        return (
            <div>
                <h3>Shopping cart</h3>
                <ListGroup>
                    { this.getCartItems() }
                </ListGroup>
                <TotalPrice cart={cart}/>
            </div>
                
        );
    }
}

export default ShoppingList;