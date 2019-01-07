import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { store } from '../../store';
import ShoppingListItem from './ShoppingListItem';

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

    getCartItems = () => {
        const { cart } = this.state;
        return cart.map(
            (product, index) => <ShoppingListItem product={product} key={index}/>);
    }

    render() {
        return (
            <div>
                <h3>Shopping cart</h3>
                <ListGroup>
                    { this.getCartItems() }
                </ListGroup>
            </div>
                
        );
    }
}

export default ShoppingList;