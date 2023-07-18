import React from 'react'
import s from './index.module.css'
import CategoriesContainer from '../../components/CategoriesContainer'
import Footer from '../../components/Footer'
import ScrollToTop from '../../components/ScrollToTop'

export default function CategoriesPage() {
  return (
    <div className={s.categories_page}>
      <ScrollToTop />
      <h2>Categories</h2>
      <CategoriesContainer />
      <Footer />
    </div>
  )
}
