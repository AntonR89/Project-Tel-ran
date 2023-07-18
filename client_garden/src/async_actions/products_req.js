import { loadProducts } from "../store/reducers/productReducer";
import { loadSingleProduct } from "../store/reducers/singleProductReducer";

export const getProducts = () => {
    return dispatch => {
        fetch('http://localhost:3333/products/all')
        .then(res => res.json())
        .then(json => {
            const new_json = json.map(el => ({
                ...el, 
                visible_price: true,
                discont_price: el.discont_price || null,
                visible_discount: el.discont_price ? true : false
            }));
            dispatch(loadProducts(new_json))
        })
    }
}

export const getSingleProduct = id => {
    return dispatch => {
        fetch(`http://localhost:3333/products/${id}`)
        .then(res => res.json())
        .then(json => {
            dispatch(loadSingleProduct(json))
        })
    }
}
