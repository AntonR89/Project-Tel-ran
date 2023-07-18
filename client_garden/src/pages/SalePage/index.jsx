import React from 'react'
import ProductsSaleContainer from '../../components/ProductsSaleContainer'
import s from './index.module.css'
import FilterForm from '../../components/FilterForm'
import Footer from '../../components/Footer'

export default function SalePage() {
  return (
    <div className={s.products_sale_page}>
      <h2>Products with sale</h2>
      <ProductsSaleContainer />
      <Footer />
    </div>
  )
}
