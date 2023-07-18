// reducers/categoryProductsReducer.js
const LOAD_CATEGORY_PRODUCTS_BEGIN = 'LOAD_CATEGORY_PRODUCTS_BEGIN';
const LOAD_CATEGORY_PRODUCTS_SUCCESS = 'LOAD_CATEGORY_PRODUCTS_SUCCESS';
const LOAD_CATEGORY_PRODUCTS_FAILURE = 'LOAD_CATEGORY_PRODUCTS_FAILURE';

const initialState = {
  category: null,
  products: [],
  loading: false,
  error: null
};

export const categoryProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CATEGORY_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case LOAD_CATEGORY_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action.payload.category,
        products: action.payload.data
      };
    case LOAD_CATEGORY_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        products: [],
        category: null
      };
    default:
      return state;
  }
};

export const loadCategoryProductsBegin = () => ({
  type: LOAD_CATEGORY_PRODUCTS_BEGIN
});

export const loadCategoryProductsSuccess = data => ({
  type: LOAD_CATEGORY_PRODUCTS_SUCCESS,
  payload: data
});

export const loadCategoryProductsFailure = error => ({
  type: LOAD_CATEGORY_PRODUCTS_FAILURE,
  payload: error
});
