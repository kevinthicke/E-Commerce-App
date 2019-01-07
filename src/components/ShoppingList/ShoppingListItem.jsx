import React from 'react';
import { Button, ListGroupItem, Glyphicon } from 'react-bootstrap';
import { store } from './../../store';

const spanStyle = {
    fontSize: '12pt',
    marginLeft: '20px'
}

const ShoppingListItem = ({ product }) => {
    const removeFromCart = product => {
        store.dispatch({ type: 'REMOVE_FROM_CART', product });
    }

    const { title, price } = product;
    return (
        <ListGroupItem>
            <Button bsStyle="danger" onClick={() => removeFromCart(product)}>
                <Glyphicon glyph="glyphicon glyphicon-remove"/>
            </Button>
            <span style={spanStyle}>{ `${title}` }</span>
        </ListGroupItem>
    );
};

export default ShoppingListItem;