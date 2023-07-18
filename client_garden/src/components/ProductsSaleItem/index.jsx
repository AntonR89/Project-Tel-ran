import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../store/reducers/cartReducer'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function ProductsSaleItem({id, image, price, discont_price, title}) {

  const dispatch = useDispatch();
  const addToCart = () => dispatch(addToCartAction({
    id, image, price, discont_price, title
  }));

  const originalPrice = discont_price && discont_price > 0 && discont_price <= 100 ? price / (1 - discont_price / 100) : null;

  return (
    <div className={s.product_sale_item}>
      <Link to={`/product/${id}`}>
        <div className={s.item_img_container}>
          <img src={`http://localhost:3333/${image}`} alt={title} className={s.item_img}/>
        </div>
        <div className={s.title_info}>
          <div className={s.price_info}>
            <div className={s.price}>
              <p className={s.dollar}>$</p>
              <p className={s.priceValue}>{price}</p>
            </div>
            {originalPrice && (
              <>
                <p className={s.originalPrice}>{originalPrice.toFixed(2)}</p>
                <p className={s.discount}>-{discont_price}%</p>
              </>
            )}
          </div>
          <p className={s.title}>{title}</p>
        </div>
      </Link>
      <div className={s.add_btn} onClick={addToCart}>Add to cart</div>
    </div>
  )
}
