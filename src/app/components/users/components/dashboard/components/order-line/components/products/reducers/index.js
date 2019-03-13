import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } from '../constants';

const initialState = {
    list: [],
    count: 0,
    error: '',
    loading: false,
}

export default (state = initialState, action) => {

    switch(action.type){
        case GET_PRODUCTS_REQUEST:
            return {
                ...state,
                error: '',
                loading: true
            };
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                ...action.response,
                loading: false
            };
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