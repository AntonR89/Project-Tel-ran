import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductItem from '../ProductItem';
import { getCategoryProducts } from '../../async_actions/categoryProduct_req';
import { getCategories } from '../../async_actions/categories_req';  // new import
import Footer from '../Footer';
import s from './index.module.css'
import FilterForm from '../FilterForm';

export default function CategoriesProductsContainer() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const categoryId = Number(id);
    
    const { loading, error, products } = useSelector((state) => state.categoryProducts);
    const categories = useSelector((state) => state.categories);
  
    useEffect(() => {
        dispatch(getCategories());  
        if (id) {
            dispatch(getCategoryProducts(id));
        }
    }, [dispatch, id]);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    const currentCategory = categories.find(category => category.id === categoryId);
  
    return (
        <div className={s.products_cat_container}>
            <h2>{currentCategory ? currentCategory.title : 'category'}</h2>
            <FilterForm />
            <div className={s.products_container}>
                {products.map((product) => (
                    <ProductItem key={product.id} {...product} />
                ))}
            </div>
            <Footer />
        </div>
    );
}
