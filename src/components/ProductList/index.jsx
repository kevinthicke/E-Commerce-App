import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Well, Button, Glyphicon } from 'react-bootstrap';
import * as styles from './styles.css';
import { _addToCart } from '../../actions';

const aProducts = [
    { id: 1, title: "The Meaning of Relativity", author: "Albert Einstein", price: 12.99 },
    { id: 2, title: "Road to Relativity", author: "Roger Penrose", price: 43.99 },
    { id: 3, title: "Space-time-matter", author: "Hermann Weyl", price: 31.89 }
]

const  ProductList = ({ addToCart }) => {
    const getProducts = () => aProducts.map(
        product => (
            <Well className={styles.ProductItem} key={product.id}> 
                <span className={styles.ProductInfo}>
                    { `${product.title}, ${product.author}` }
                </span>
                <Button className={styles.ProductItemButton} bsStyle="primary" onClick={() => addToCart(product)}>
                    { `${product.price}` }<Glyphicon glyph="glyphicon glyphicon-usd"/>
                </Button>
            </Well>
        )
    )
    
    return (
        <div>
            <h2>Products</h2>
            { getProducts() }
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addToCart: product => dispatch(_addToCart(product))
})

export default connect(null, mapDispatchToProps)(ProductList);