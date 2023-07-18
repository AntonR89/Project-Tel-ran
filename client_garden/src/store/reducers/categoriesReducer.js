const LOAD_CATEGORIES = '[CATEGORIES_CONTAINER] LOAD_CATEGORIES';

export const loadCategories = payload => ({
    type: LOAD_CATEGORIES, payload
});

export const categoriesReducer = (state = [], action) => {
    if(action.type === LOAD_CATEGORIES){
        return action.payload
    } else {
        return state
    }
}
