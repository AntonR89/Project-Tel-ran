const LOAD_PRODUCTS = '[PRODUCTS_CONTAINER] LOAD_PRODUCTS';
const SORT_PRODUCTS = '[PRODUCTS_CONTAINER] SORT_PRODUCTS';
const FILTER_BY_PRICE = '[PRODUCTS_CONTAINER] FILTER_BY_PRICE';
const FILTER_BY_DISCOUNT = '[PRODUCTS_CONTAINER] FILTER_BY_DISCOUNT';

export const loadProducts = payload => ({
    type: LOAD_PRODUCTS, payload
});

export const sortProductsAction = payload => ({
    type: SORT_PRODUCTS, payload
});

export const filterByPriceAction = payload => ({
    type: FILTER_BY_PRICE, payload
});

export const filterByDiscountAction = payload => ({
    type: FILTER_BY_DISCOUNT, payload
});

export const productReducer = (state = [], action) => {
    if(action.type === LOAD_PRODUCTS){
        return action.payload
    } else if (action.type === SORT_PRODUCTS) {
        if(action.payload === 'title'){
            state.sort((a, b) => a[action.payload].localeCompare(b[action.payload]))
        } else if (action.payload === 'price_asc'){
            state.sort((a, b) => b.price - a.price)
        } else if (action.payload === 'price_desc'){
            state.sort((a, b) => a.price - b.price)
        } else if (action.payload === 'default'){
            state.sort((a, b) => a.id - b.id)
        }
        return [...state]
    } else if (action.type === FILTER_BY_PRICE){
        const { from_value, to_value } = action.payload;
        return state.map(el => {
            if(el.price >= from_value && el.price <= to_value){
                el.visible_price = true
            } else {
                el.visible_price = false
            }
            return el
        })
    } else if (action.type === FILTER_BY_DISCOUNT){
        return state.map(el => {
            if (el.discont_price !== null){
                el.visible_discount = action.payload
            }
            return el
        })
    } else {
        return state
    }
}
