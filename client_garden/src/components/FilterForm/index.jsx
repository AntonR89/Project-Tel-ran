import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterByPriceAction, sortProductsAction, filterByDiscountAction } from '../../store/reducers/productReducer';
import s from './index.module.css';

export default function FilterForm({ defaultChecked = false }) {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    sort: 'default',
    discount: defaultChecked,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const { from, to } = formData;
    const to_value = to || Infinity;
    const from_value = from || 0;
    dispatch(filterByPriceAction({ from_value, to_value }));
    dispatch(filterByDiscountAction(formData.discount));
  }, [formData]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSortChange = event => {
    const { value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      sort: value,
    }));
    dispatch(sortProductsAction(value));
  };

  const handleDiscountChange = (event) => {
    const isChecked = event.target.checked;
    setFormData(prevFormData => ({
      ...prevFormData,
      discount: isChecked,
    }));
  };

  return (
    <div className={s.formContainer}>
      <form className={s.formElement}>
        <span className={s.labelTitle}>Price</span>
        <input
          type="number"
          name="from"
          placeholder="from"
          value={formData.from}
          onChange={handleInputChange}
          className={`${s.inputField} ${s.inputMarginRight}`}
        />
        <input
          type="number"
          name="to"
          placeholder="to"
          value={formData.to}
          onChange={handleInputChange}
          className={s.inputField}
        />
      </form>
      <div className={s.formElement}>
        <span className={s.labelTitle}>Discounted items</span>
        <input 
          type="checkbox" 
          id="discount-checkbox"
          defaultChecked={defaultChecked}
          onChange={handleDiscountChange} 
          className={s.checkboxField} 
        />
        <label htmlFor="discount-checkbox" className={s.checkboxLabel}></label>
      </div>
      <div className={s.formElement}>
        <span className={s.labelTitle}>Sorted</span>
        <select 
          value={formData.sort} 
          onChange={handleSortChange} 
          className={s.selectField}
        >
          <option value="default">by default</option>
          <option value="title">by title A-Z</option>
          <option value="price_asc">by price ascending</option>
          <option value="price_desc">by price descending</option>
        </select>
      </div>
    </div>
  );
}
