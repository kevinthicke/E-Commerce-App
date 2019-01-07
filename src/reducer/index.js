const initialState = {
    cart: []
};

export const reducer = (state=initialState, action) => {
    const { type, product } = action;
    
    switch(type) {
        case 'ADD_TO_CART':
            return ({
                ...state,
                cart: state.cart.concat(product)
            });
        case 'REMOVE_FROM_CART':
            const { cart: oldCart } = state;
            const newCart = oldCart.filter(element => element.id !== product.id);
            return ({
                cart: newCart
            });
        default: 
            return state;
    }
}