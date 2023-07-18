const ADD_TO_CART = '[PRODUCT_ITEM] ADD_TO_CART';
const DELETE_CART_ITEM = '[CART_ITEM] DELETE_CART_ITEM';
const DECREMENT_ITEM = '[CART_ITEM] DECREMENT_ITEM';
const INCREMENT_ITEM = '[CART_ITEM] INCREMENT_ITEM';

export const addToCartAction = payload => ({
    type: ADD_TO_CART, payload
});
export const deleteCartItemAction = payload => ({
    type: DELETE_CART_ITEM, payload
});

export const decrementItemAction = payload => ({
    type: DECREMENT_ITEM, payload
});
export const incrementItemAction = payload => ({
    type: INCREMENT_ITEM, payload
});

const checkCartProducts = (state, payload) => {
    const productState = state.find(el => el.id === payload.id);
    if(productState) {
        productState.count++;
        return [...state]
    } else {
        return [...state, {...payload, count: 1}]
    }
}

export const cartReducer = (state = [], action) => {
    if(action.type === ADD_TO_CART) {
        return checkCartProducts(state, action.payload)
    } else if(action.type === DELETE_CART_ITEM) {
        return state.filter(el => el.id !== action.payload)
    } else if(action.type === DECREMENT_ITEM) {
        const target_item = state.find(el => el.id === action.payload);
        if(target_item.count === 1) {
            return state.filter(el => el.id !== action.payload)
        } else {
            target_item.count--
            return [...state]
        }
    } else if(action.type === INCREMENT_ITEM) {
        state.find(el => el.id === action.payload).count++
        return [...state]
    } else {
        return state
    }
}