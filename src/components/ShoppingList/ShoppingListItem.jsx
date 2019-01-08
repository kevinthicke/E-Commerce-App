import React from 'react';
import { Glyphicon, Button, ListGroupItem } from 'react-bootstrap';

const spanStyle = {
    fontSize: '12pt',
    marginLeft: '20px'
}

const ShoppingListItem = ({ product, onShoppingListItem }) => {
    const { title } = product;
    
    return (
        <ListGroupItem>
            <Button bsStyle="danger" onClick={onShoppingListItem}>
                <Glyphicon glyph="glyphicon glyphicon-remove"/>
            </Button>
            <span style={spanStyle}>{ `${title}` }</span>
        </ListGroupItem>
    )
};

export default ShoppingListItem;