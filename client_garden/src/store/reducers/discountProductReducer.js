const FILTER_BY_DISCOUNT = '[PRODUCTS_CONTAINER] FILTER_BY_DISCOUNT';

export const filterByDiscountAction = payload => ({
    type: FILTER_BY_DISCOUNT, payload
});

const initialState = false;

export const discountReducer = (state = initialState, action) => {
    if(action.type === FILTER_BY_DISCOUNT){
        return action.payload;
    } else {
        return state;
    }
}
