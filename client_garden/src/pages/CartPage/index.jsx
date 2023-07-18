import React from 'react'
import CartContainer from '../../components/CartContainer'
import s from './index.module.css'
import Footer from '../../components/Footer'
import ScrollToTop from '../../components/ScrollToTop'

export default function CartPage() {
  return (
    <div className={s.cart_page}>
      <h2>Shopping cart</h2>
      <CartContainer />
      <Footer />
    </div>
  )
}
