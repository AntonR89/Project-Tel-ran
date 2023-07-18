// async_actions/categories_req.js
import {
  loadCategoryProductsBegin,
  loadCategoryProductsSuccess,
  loadCategoryProductsFailure,
} from '../store/reducers/categoryProductsReducer';

export const getCategoryProducts = (categoryId) => {
  return (dispatch) => {
    dispatch(loadCategoryProductsBegin());

    fetch(`http://localhost:3333/categories/${categoryId}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(loadCategoryProductsSuccess(data));
      })
      .catch((error) => {
        dispatch(loadCategoryProductsFailure(error));
      });
  };
};
