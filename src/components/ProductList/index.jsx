import React from 'react';
import { connect } from 'react-redux';
import { _addToCart } from '../../actions';
import ProductListItem from './ProductListItem';

const aProducts = [
    { id: 1, title: "The Meaning of Relativity", author: "Albert Einstein", price: 12.99 },
    { id: 2, title: "Road to Relativity", author: "Roger Penrose", price: 43.99 },
    { id: 3, title: "Space-time-matter", author: "Hermann Weyl", price: 31.89 }
]

const ProductList = ({ addToCart }) => {
    const handleProductItemClick = product => addToCart(product);

    const getProducts = () => aProducts.map(
        product => <ProductListItem key={product.id} product={product} onProductItemClick={() => handleProductItemClick(product)}/>);
    
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

export default ProductList;