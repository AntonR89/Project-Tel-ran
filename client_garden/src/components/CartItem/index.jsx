import React from 'react'
import s from './index.module.css'
import decrement_img from './Cart_icon/decrement_img.svg'
import increment_img from './Cart_icon/increment_img.svg'
import kross_img from './Cart_icon/kross_img.svg'
import { useDispatch } from 'react-redux'
import { deleteCartItemAction } from '../../store/reducers/cartReducer'
import { incrementItemAction } from '../../store/reducers/cartReducer'
import { decrementItemAction } from '../../store/reducers/cartReducer'

export default function CartItem({id, image, price, discont_price, title, count}) {

  const dispatch = useDispatch();
  const delete_item = () => dispatch(deleteCartItemAction(id));

  const increment_item = () => dispatch(incrementItemAction(id));
  const decrement_item = () => dispatch(decrementItemAction(id));

  const originalPrice = discont_price && discont_price > 0 && discont_price <= 100 ? price / (1 - discont_price / 100) : null;

  return (
    <div className={s.cart_item}>
        <img src={`http://localhost:3333/${image}`} alt={title} className={s.item_img}/>
        <div className={s.item_info}>
          <div className={s.item_title}>
            <p>{title}</p>
          </div>
          <div className={s.price_info}>
            <p className={s.item_price}>{(price * count).toFixed(2)}$</p>
            {originalPrice && <p className={s.item_discont}>{originalPrice.toFixed(2)}$</p>}
          </div>
            <div className={s.item_counter}>
                <img src={decrement_img} alt='decrement' onClick={decrement_item}/>
                <p>{count}</p>
                <img src={increment_img} alt='increment' onClick={increment_item}/>
            </div>
        </div>
        <img src={kross_img} alt='kross' onClick={delete_item} className={s.kross_delete} />
    </div>
  )
}
