import React, { Component } from 'react';
import { Well, Button, Glyphicon } from 'react-bootstrap';
import { store } from './../../store';
import * as styles from './styles.css';
import { _addToCart } from '../../actions';

export default class ProductItem extends Component {

    addToCart = product => {
        store.dispatch(_addToCart(product));
    }

    render() {
        const { product } = this.props;
        return (    
            <Well className={styles.ProductItem}> 
                <span className={styles.ProductInfo}>
                    { `${product.title}, ${product.author}` }
                </span>
                <Button className={styles.ProductItemButton} bsStyle="primary" onClick={() => this.addToCart(product)}>
                    { `${product.price}` }<Glyphicon glyph="glyphicon glyphicon-usd"/>
                </Button>
            </Well>
        )
    }
}
    
