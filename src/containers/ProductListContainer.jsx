import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import { _addToCart } from '../actions';

const ProductListContainer = ({ addToCart }) => {
    const handleProduct = product => addToCart(product);
    
    return (
        <ProductList addToCart={addToCart} onSelectedItem={handleProduct}/>
    );
};

const mapDispatchToProps = dispatch => ({
    addToCart: product => dispatch(_addToCart(product))
})

export default connect(null, mapDispatchToProps)(ProductListContainer)