import React from 'react';
import { Well, Button, Glyphicon } from 'react-bootstrap';
import * as styles from './styles.css';

const ProductListItem = ({ product, onProductItemClick }) => {
    return (
        <Well className={styles.ProductItem} key={product.id}> 
            <span className={styles.ProductInfo}>
                { `${product.title}, ${product.author}` }
            </span>
            <Button className={styles.ProductItemButton} bsStyle="primary" onClick={onProductItemClick}>
                { `${product.price}` }<Glyphicon glyph="glyphicon glyphicon-usd"/>
            </Button>
        </Well>
    );
};

export default ProductListItem;