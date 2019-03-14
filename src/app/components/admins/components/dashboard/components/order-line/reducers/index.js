import { GET_ORDER_LINES_REQUEST, GET_ORDER_LINES_SUCCESS, GET_ORDER_LINES_FAIL } from '../constants'
import { CREATE_ORDER_LINE_REQUEST, CREATE_ORDER_LINE_SUCCESS, CREATE_ORDER_LINE_FAIL } from '../component/create-order-line/constants'
import { DELETE_ORDER_LINE_REQUEST, DELETE_ORDER_LINE_SUCCESS, DELETE_ORDER_LINE_FAIL } from '../constants'

const initialState = {
    list: [],
    limit: 10,
    offset: 0,
    count: 0,
    error: '',
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case DELETE_ORDER_LINE_REQUEST:
        case CREATE_ORDER_LINE_REQUEST:
        case GET_ORDER_LINES_REQUEST:
            return {
                ...state,
                error: '',
                loading: true
            };
        case GET_ORDER_LINES_SUCCESS:
            return {
                ...state,
                ...action.response,
                loading: false
            };
        case CREATE_ORDER_LINE_SUCCESS:
            const orderLinesCreate = state.list.split();
            orderLinesCreate.push(action.response);
            return {
                ...state,
                list: orderLinesCreate,
                loading: false
            };
        case DELETE_ORDER_LINE_SUCCESS:
            const listDelete = state.list.filter( orderLine => orderLine.uuid !== action.uuid);
            return {
                ...state,
                list: listDelete,
                loading: false
            };
        case DELETE_ORDER_LINE_FAIL:
        case CREATE_ORDER_LINE_FAIL:
        case GET_ORDER_LINES_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}