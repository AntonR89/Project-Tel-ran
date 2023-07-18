import React, { useEffect } from 'react';
import { getSingleProduct } from '../../async_actions/products_req';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCartAction } from '../../store/reducers/cartReducer';
import s from './index.module.css'
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

export default function ProductDescrPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product = {}] = useSelector(state => state.singleProduct);
  const { title, image, price, discont_price, description } = product;

  const addToCart = () => dispatch(addToCartAction({ 
    id: +id, image, price, discont_price, title
  }));

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);

  const originalPrice = discont_price && discont_price > 0 && discont_price <= 100 ? price / (1 - discont_price / 100) : null;

  return (
    <div className={s.product_descr_page}>
      <ScrollToTop />
      <h2>{title}</h2>
      <div className={s.description_container}>
        <img src={`http://localhost:3333/${image}`} alt={title} className={s.title_img}/>
        <div className={s.description}>
          <div className={s.description_price}>
            <p className={s.price}>{price}$</p>
            {originalPrice && (
              <>
                <p className={s.originalPrice}>{originalPrice.toFixed(2)}$</p>
                <p className={s.discont_price}>-{discont_price}%</p>
              </>
            )}
          </div>
          <div onClick={addToCart} className={s.to_cart_btn}>To cart</div>
          <div className={s.descr_text}>
            <p className={s.descr_title}>Description</p>
            <p className={s.descr}>{description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
