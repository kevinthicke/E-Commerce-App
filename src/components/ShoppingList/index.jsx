import React from 'react';
import { ListGroup } from 'react-bootstrap';
import TotalPrice from './TotalPrice';
import { _removeFromCart } from './../../actions';
import { connect } from 'react-redux';
import ShoppingListItem from './ShoppingListItem';


const ShoppingList = ({ cart, removeFromCart })=> {
    const handleShoppingListItem = product => removeFromCart(product);

    const getCartItems = () => {
        return cart.map((product, index) => <ShoppingListItem key={index} 
                                                              product={product} 
                                                              onShoppingListItem={()=> handleShoppingListItem(product)}/>);
    }

    return (
        <div>
            <h3>Shopping cart</h3>
            <ListGroup>
                { getCartItems() }
            </ListGroup>
            <TotalPrice cart={cart}/>
        </div>
            
    );
}

const mapStateToProps = state => ({
    cart: state.cart
})

const mapDispatchToProps = dispatch => ({
    removeFromCart: product => dispatch(_removeFromCart(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);