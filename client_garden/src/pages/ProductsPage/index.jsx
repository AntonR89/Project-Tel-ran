import React from 'react'
import s from './index.module.css'
import ProductsContainer from '../../components/ProductsContainer'
import FilterForm from '../../components/FilterForm'
import Footer from '../../components/Footer'

export default function ProductsPage() {
  return (
    <div className={s.products_page}>
      <h2>All products</h2>
      <FilterForm />
      <ProductsContainer />
      <Footer />
    </div>
  )
}
