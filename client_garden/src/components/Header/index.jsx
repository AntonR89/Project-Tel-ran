import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import cart_image from './NavMenu_img/cart_image.svg'
import logo_image from './NavMenu_img/logo_image.svg'


export default function Header() {
  return (
    <header>
      <div className={s.logo_item}>
        <Link to='/'>
          <img src={logo_image} alt='logo img' />
        </Link>

        <Link to='/categories'>
          <div className={s.btn_catalog}>Catalog</div>
        </Link>
      </div>

        <div className={s.nav_menu}>
          <Link to='/'>Main Page</Link>
          <Link to='/products'>All products</Link>
          <Link to='/sale'>All sales</Link>
        </div>
        
        <Link to='/cart'>
          <img src={cart_image} alt='cart image' />
        </Link>
    </header>
  )
}
