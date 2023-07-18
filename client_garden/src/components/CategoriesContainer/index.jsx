import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CategoryItem from '../CategoryItem'
import { getCategories } from '../../async_actions/categories_req'
import s from './index.module.css'

export default function CategoriesContainer({ limit }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    const categories_state = useSelector(state => state.categories);

    const categories_to_show = limit ? categories_state.slice(0, limit) : categories_state;

    return (
        <div className={s.categories_container}>
            {
                categories_to_show.map(el => <CategoryItem key={el.id} {...el}/>)
            }
        </div>
    )
}
