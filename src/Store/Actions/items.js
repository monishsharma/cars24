import * as actionTypes from './actionTypes';
import Axios from 'axios';
import * as Actions from './index';

const storeProducts = (products) => {
    return {
        type: actionTypes.STORE_PRODUCTS,
        products:products
    }
}

export const getProducts = () => {
    return (dispatch) => {
        dispatch(Actions.setLoader());
        Axios.get('https://fakestoreapi.com/products?limit=6')
        .then(response => {
            dispatch(storeProducts(response.data));
            dispatch(Actions.unSetLoader());
        })
    }
}

export const getMoreProduct = (limit) => {
    return (dispatch) => {
        dispatch(Actions.setLoader());
        Axios.get(`https://fakestoreapi.com/products?limit=${limit}`)
        .then(response => {
            dispatch(storeProducts(response.data));
            dispatch(Actions.unSetLoader());
        })
    }
}

