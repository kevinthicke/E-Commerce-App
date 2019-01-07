import React, { Component } from 'react';
import ProductItem from './ProductItem';

const aProducts = [
    { id: 1, title: "The Meaning of Relativity", author: "Albert Einstein", price: 12.99 },
    { id: 2, title: "Road to Relativity", author: "Roger Penrose", price: 43.99 },
    { id: 3, title: "Space-time-matter", author: "Hermann Weyl", price: 31.89 }
]

class ProductList extends Component {
    getProducts = () => aProducts.map(product => <ProductItem product={product} key={product.id}/>)
    render() {
        return (
            <div>
                { this.getProducts() }
            </div>
        );
    }
}

export default ProductList;