import { GET_PRODUCT_TO_UPDATE_REQUEST, GET_PRODUCT_TO_UPDATE_SUCCESS, GET_PRODUCT_TO_UPDATE_FAIL } from '../constants';

const initialState = {
    error: '',
    loading: false,
}

export default (state = initialState, action) => {

    switch(action.type){
        case GET_PRODUCT_TO_UPDATE_REQUEST:
            return {
                ...state,
                error: '',
                loading: true
            };
        case GET_PRODUCT_TO_UPDATE_SUCCESS:
            return {
                ...state,
                ...action.response,
                loading: false
            };
        case GET_PRODUCT_TO_UPDATE_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}