import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductItem from '../ProductItem';
import { getProducts } from '../../async_actions/products_req';
import s from './index.module.css'

export default function ProductsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products_state = useSelector(state => state.products);

  return (
    <div>
      <div className={s.products_container}>
        {
          products_state
          .filter(el => el.visible_price)
          .map(el => <ProductItem key={el.id} {...el} />) 
        }
      </div>
    </div>
  )
}
