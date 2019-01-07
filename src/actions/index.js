import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const _addToCart = product => ({
    type: ADD_TO_CART,
    product
});

export const _removeFromCart = product => ({
    type: REMOVE_FROM_CART,
    product
})