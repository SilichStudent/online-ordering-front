import { GET_ORDER_LINE_PRODUCTS_REQUEST, GET_ORDER_LINE_PRODUCTS_SUCCESS, GET_ORDER_LINE_PRODUCTS_FAIL } from '../constants';
import { GET_ORDER_LINE_PRODUCTS_DEFAULT_REQUEST, GET_ORDER_LINE_PRODUCTS_DEFAULT_SUCCESS, GET_ORDER_LINE_PRODUCTS_DEFAULT_FAIL } from '../constants';
import { ADD_PRODUCT_TO_CART_REQUEST, ADD_PRODUCT_TO_CART_SUCCESS, ADD_PRODUCT_TO_CART_FAIL } from '../constants';

const initialState = {
    list: [],
    count: 0,
    error: '',
    loading: false,
    quantity: 0
}

export default (state = initialState, action) => {

    switch (action.type) {
        case ADD_PRODUCT_TO_CART_REQUEST:
        case GET_ORDER_LINE_PRODUCTS_DEFAULT_REQUEST:
        case GET_ORDER_LINE_PRODUCTS_REQUEST:
            return {
                ...state,
                error: '',
                loading: true
            };
        case GET_ORDER_LINE_PRODUCTS_DEFAULT_SUCCESS:
            return {
                ...state,
                list: action.response.products,
                count: action.response.products.length,
                loading: false
            };
        case GET_ORDER_LINE_PRODUCTS_SUCCESS:
            return {
                ...state,
                ...action.response,
                loading: false
            };
        case ADD_PRODUCT_TO_CART_SUCCESS:
            return {
                ...state,
                quantity: state.quantity + 1,
                loading: false
            }
        case ADD_PRODUCT_TO_CART_FAIL:
        case GET_ORDER_LINE_PRODUCTS_DEFAULT_FAIL:
        case GET_ORDER_LINE_PRODUCTS_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}