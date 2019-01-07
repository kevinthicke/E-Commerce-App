import React, { Component } from 'react';
import { Well, Button, Glyphicon } from 'react-bootstrap';
import * as styles from './styles.css';

export default class ProductItem extends Component {
    addToCart = product => console.log(`${product.title} added to cart! :)`)
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
    
