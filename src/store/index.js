import { createStore } from 'redux';

const initialState = {
    cart: []
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return ({
                ...state,
                cart: state.cart.concat(action.product)
            });
    }
}

export const store =  createStore(reducer);