import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductItem from '../ProductItem';
import { getProducts } from '../../async_actions/products_req';
import s from './index.module.css'

export default function ProductsSaleContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products_state = useSelector(state => state.products);

  const discountedProducts = products_state.filter(product => product.discont_price !== null);

  return (
    <div>
      <div className={s.products_sale_container}>
        {
          discountedProducts.map(el => <ProductItem key={el.id} {...el} />)
        }
      </div>
    </div>
  )
}
