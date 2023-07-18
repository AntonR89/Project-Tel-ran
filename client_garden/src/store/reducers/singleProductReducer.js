const LOAD_SINGLE_PRODUCT = 'LOAD_SINGLE_PRODUCT';

export const loadSingleProduct = payload => ({ 
    type: LOAD_SINGLE_PRODUCT, payload 
});

export const singleProductReducer = (state = [], action) => {
    if(action.type === LOAD_SINGLE_PRODUCT) {
        return action.payload
    } else {
        return state
    }
}