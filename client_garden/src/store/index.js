import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productReducer } from './reducers/productReducer';
import { categoriesReducer } from './reducers/categoriesReducer';
import { cartReducer } from './reducers/cartReducer';
import { singleProductReducer } from './reducers/singleProductReducer';
import { discountReducer } from './reducers/discountProductReducer'; 
import { categoryProductsReducer } from './reducers/categoryProductsReducer';

const rootReducer = combineReducers({
  products: productReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  singleProduct: singleProductReducer,
  discount: discountReducer,
  categoryProducts: categoryProductsReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));