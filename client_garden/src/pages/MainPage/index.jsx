import React, { useState, useEffect } from 'react'
import s from './index.module.css'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import title_img from './Page_img/title_img.png'
import dwarf from './Page_img/dwarf.png'
import CategoriesContainer from '../../components/CategoriesContainer'
import ProductItem from '../../components/ProductItem';
import { sendPhoneNumber } from '../../async_actions/post_req'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../async_actions/products_req';

export default function MainPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products_state = useSelector(state => state.products);
  
  const discountedProducts = products_state
    .filter(product => product.discont_price !== null)
    .slice(0, 4);

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
      const data = await sendPhoneNumber(phoneNumber);
      if (data.message === 'request processed') {
        setMessage('Phone number has been sent!');
        console.log(`Phone number: ${phoneNumber}, Response: `, data);
        setPhoneNumber('');
      } else {
        setMessage(data.message);
      }
      
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className={s.title_content}>
      <div className={s.title_review}>
        <div>
          <h2>Sale</h2>
          <p>New season</p>
          <Link to='/sale' className={s.link_sale}>Sale</Link>
        </div>
        <img src={title_img} alt='title_img' />
      </div>
      <div className={s.catalog_info}>
        <div className={s.catalog}>
          <h2>Catalog</h2>
          <Link to='./categories' className={s.link_categories}>All categories</Link>
        </div>
        <div>
          <CategoriesContainer limit={4}/>
        </div>
      </div>
      <div className={s.discount_offer}>
        <div className={s.offer_item}>
          <img src={dwarf} alt='dwarf'/>
          <div className={s.offer_form}>
            <div className={s.title_form}>
              <h2>5% off</h2>
              <p>on the first order</p>
            </div>
            <form onSubmit={handleSubmit}>
              <input 
                type='text' 
                placeholder='+49' 
                name='phone' 
                className={s.input_phone} 
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                onBlur={handlePhoneNumberChange}
              />
              {error && <div style={{color: "red"}}>{error}</div>}
              <button type="submit" className={s.discont_btn}>Get a discount</button>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
      </div>
      <div className={s.products_sale}>
        <h2>Sale</h2>
        <div className={s.products_sale_container}>
          {
            discountedProducts.map(el => <ProductItem key={el.id} {...el} />)
          }
        </div>
      </div>
      <div className={s.footer}>
        <Footer />
      </div>
    </div>
  )
}
