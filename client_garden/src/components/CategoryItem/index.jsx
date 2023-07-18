import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';

export default function CategoryItem({ id, image, title }) {
  return (
    <Link to={`/categories/${id}`}>
      <div className={s.category_item}>
          <img src={`http://localhost:3333/${image}`} alt={title} />
          <p>{title}</p>
      </div>
    </Link>
  )
}
