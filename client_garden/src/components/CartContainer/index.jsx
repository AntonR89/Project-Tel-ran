import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { sendOrder } from '../../async_actions/post_req';
import CartItem from '../CartItem';
import s from './index.module.css';
import empty_cart from './cart_container_img/empty_cart.png'

export default function CartContainer() {
  const cart_state = useSelector(state => state.cart);
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const validatePhoneNumber = (input) => {

    const phoneNumberPattern = /^\+\d{1,15}$/;
    return phoneNumberPattern.test(input);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    if (!validatePhoneNumber(e.target.value)) {
      setError("Wrong phone number");
    } else {
      setError("");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhoneNumber(phoneNumber)) {
      setMessage("Invalid phone number!");
      return;
    }

    try {
      const order = cart_state.map(item => ({
        ...item,
        total: item.price * item.count,
      }));

      const totalOrderCost = order.reduce((sum, item) => sum + item.total, 0);

      const data = await sendOrder(phoneNumber, order);
      if (data.message === 'request processed') {
        setMessage('Order has been sent!');
      } else {
        setMessage(data.message);
      }
      console.log(`Phone number: ${phoneNumber}, Order: `, order, "Total cost: ", totalOrderCost, "Response: ", data);
    } catch (error) {
      console.error('Error:', error);
    }

    setPhoneNumber('');
  }

  const total = parseFloat(cart_state.reduce((acc, el) => acc + el.price * el.count, 0).toFixed(2));

  return (
    <div className={s.container}>
      <div className={s.cart_container}>
        {cart_state.length > 0 ? (
          cart_state.map(el => <CartItem key={el.id} {...el} />)
        ) : (
          <img src={empty_cart} alt='empty cart' className={s.empty_cart}/>
        )}
      </div>
      <div className={s.order_details}>
        <h3>Order details</h3>
        {cart_state.length > 0 && (
          <>
            <p className={s['total-container']}>
              <span className={s.total}>Total</span> 
              <span className={s['total-value']}>{total}$</span>
            </p>
            <form onSubmit={handleSubmit}>
              <input 
                type='text' 
                placeholder='Phone number' 
                name='phone' 
                className={s.input_phone}
                value={phoneNumber}
                onChange={handlePhoneNumberChange} 
              />
              {error && <div style={{color: "red"}}>{error}</div>}
              <button type="submit" className={s.order_btn}>Order</button>
            </form>
            {message && <p>{message}</p>}
          </>
        )}
      </div>
    </div>
  );
}
