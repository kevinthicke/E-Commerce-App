import React, { Component } from 'react';
import { Button, ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';
import TotalPrice from './TotalPrice';
import { _removeFromCart } from './../../actions';
import { connect } from 'react-redux';

const spanStyle = {
    fontSize: '12pt',
    marginLeft: '20px'
}

class ShoppingList extends Component {
    
    getCartItems = () => {
        const { cart } = this.props;
        return cart.map((product, index) => {
            const { title } = product;
            return (
                <ListGroupItem key={index}>
                    <Button bsStyle="danger" onClick={() => this.props.removeFromCart(product)}>
                        <Glyphicon glyph="glyphicon glyphicon-remove"/>
                    </Button>
                    <span style={spanStyle}>{ `${title}` }</span>
                </ListGroupItem>
            )
        });
    }

    render() {
        const { cart } = this.props;
        return (
            <div>
                <h3>Shopping cart</h3>
                <ListGroup>
                    { this.getCartItems() }
                </ListGroup>
                <TotalPrice cart={cart}/>
            </div>
                
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart
})

const mapDispatchToProps = dispatch => ({
    removeFromCart: product => dispatch(_removeFromCart(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);