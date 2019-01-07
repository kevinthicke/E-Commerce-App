import React from 'react';
import { Button, ListGroupItem, Glyphicon } from 'react-bootstrap';

const spanStyle = {
    fontSize: '12pt',
    marginLeft: '20px'
}

const ShoppingListItem = ({ product }) => {
    const { title, price } = product;
    return (
        <ListGroupItem>
            <Button bsStyle="danger">
                <Glyphicon glyph="glyphicon glyphicon-remove"/>
            </Button>
            <span style={spanStyle}>{ `${title}` }</span>
        </ListGroupItem>
    );
};

export default ShoppingListItem;