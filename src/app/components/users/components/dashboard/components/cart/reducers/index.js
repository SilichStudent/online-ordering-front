import { GET_USER_CART_REQUEST, GET_USER_CART_SUCCESS, GET_USER_CART_FAIL } from '../constants';
import { CHECKOUT_REQUEST, CHECKOUT_SUCCESS, CHECKOUT_FAIL } from '../constants';

const initialState = {
    error: '',
    loading: false,
    products: []
};


export default (state = initialState, action) => {
    switch (action.type) {
        case CHECKOUT_REQUEST:
        case GET_USER_CART_REQUEST:
            return {
                ...state,
                error: '',
                loading: true
            };
        case GET_USER_CART_SUCCESS:
            return {
                ...state,
                products: action.response,
                loading: false
            };
        case CHECKOUT_SUCCESS:
            return {
                ...state,
                products: [],
                loading: false
            };
        case CHECKOUT_FAIL:
        case GET_USER_CART_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}