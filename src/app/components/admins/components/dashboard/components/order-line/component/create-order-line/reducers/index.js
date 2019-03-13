import { GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL } from '../constants'
import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } from '../constants'

const initialState = {
    products: [],
    categories: [],
    loading: false,
    error: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES_REQUEST:
        case GET_PRODUCTS_REQUEST:
            return {
                ...state,
                error: '',
                loading: true
            };
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.response.list,
                loading: false
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.response.list,
                loading: false
            }
        case GET_CATEGORIES_FAIL:
        case GET_PRODUCTS_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}