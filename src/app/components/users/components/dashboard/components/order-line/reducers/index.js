import { GET_ORDER_LINE_REQUEST, GET_ORDER_LINE_SUCCESS, GET_ORDER_LINE_FAIL } from '../constants';

const initialState = {
    error: '',
    loading: false,
    products: [],
    categories: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER_LINE_REQUEST:
            return {
                ...state,
                error: '',
                loading: true
            };
        case GET_ORDER_LINE_SUCCESS:
            return {
                ...state,
                ...action.response,
                loading: false
            };
        case GET_ORDER_LINE_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}