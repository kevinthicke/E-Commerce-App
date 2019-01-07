import { createStore } from 'redux';

const initialState = {
    cart: []
};

const reducer = (state, action) => {
    switch(state.type) {
        case 'ADD_TO_CART':
            return ({
                ...state,
                cart: state.cart.concat(action.product)
            });
    }
}

export const store =  createStore(reducer, initialState);