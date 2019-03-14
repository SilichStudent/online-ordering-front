
import { GET_ORDER_LINE_TO_UPDATE_REQUEST, GET_ORDER_LINE_TO_UPDATE_SUCCESS, GET_ORDER_LINE_TO_UPDATE_FAIL } from '../constants';

const initialState = {
    error: '',
    loading: false,
}

export default (state = initialState, action) => {

    switch(action.type){
        case GET_ORDER_LINE_TO_UPDATE_REQUEST:
            return {
                ...state,
                error: '',
                loading: true
            };
        case GET_ORDER_LINE_TO_UPDATE_SUCCESS:
            return {
                ...state,
                ...action.response,
                loading: false
            };
        case GET_ORDER_LINE_TO_UPDATE_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}