import { callApi } from '../../../../../../../../../../common/services/api/api';
import { RequestBuilder } from '../../../../../../../../../../common/services/api/RequestBuilder';
import { Methods } from '../../../../../../../../../../common/services/api/Request';
import { GET_ORDER_LINE_PRODUCTS_REQUEST, GET_ORDER_LINE_PRODUCTS_SUCCESS, GET_ORDER_LINE_PRODUCTS_FAIL } from '../constants';
import { GET_ORDER_LINE_PRODUCTS_DEFAULT_REQUEST, GET_ORDER_LINE_PRODUCTS_DEFAULT_SUCCESS, GET_ORDER_LINE_PRODUCTS_DEFAULT_FAIL } from '../constants';
import { ADD_PRODUCT_TO_CART_REQUEST, ADD_PRODUCT_TO_CART_SUCCESS, ADD_PRODUCT_TO_CART_FAIL } from '../constants';

export const loadProducts = (id) => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint(`/products/category/${id}`)
            .addMethod(Methods.GET)
            .build();

        
        dispatch({ type: GET_ORDER_LINE_PRODUCTS_REQUEST });

        callApi(request).then( response => {
            dispatch({ type: GET_ORDER_LINE_PRODUCTS_SUCCESS, response })
        }).catch( err => {
            dispatch({ type: GET_ORDER_LINE_PRODUCTS_FAIL, error: err })
        })
    }
}

export const loadOrderLine = () => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint('/order-lines/published')
            .addMethod(Methods.GET)
            .build();


        dispatch({ type: GET_ORDER_LINE_PRODUCTS_DEFAULT_REQUEST });

        callApi(request).then(response => {
            dispatch({ type: GET_ORDER_LINE_PRODUCTS_DEFAULT_SUCCESS, response })
        }).catch(err => {
            dispatch({ type: GET_ORDER_LINE_PRODUCTS_DEFAULT_FAIL, error: err })
        })
    }
}

export const addProductToCart = (cartObj) => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint('/cart')
            .addMethod(Methods.POST)
            .addBody(cartObj)
            .build();


        dispatch({ type: ADD_PRODUCT_TO_CART_REQUEST });

        callApi(request).then(response => {
            dispatch({ type: ADD_PRODUCT_TO_CART_SUCCESS, response })
        }).catch(err => {
            dispatch({ type: ADD_PRODUCT_TO_CART_FAIL, error: err })
        })
    }
}