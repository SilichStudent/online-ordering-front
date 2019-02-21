import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL } from '../constants'
import { PUT_USERS_REQUEST, PUT_USERS_SUCCESS, PUT_USERS_FAIL } from '../constants'
import { DELETE_USERS_REQUEST, DELETE_USERS_SUCCESS, DELETE_USERS_FAIL } from '../constants'

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
        case GET_USERS_REQUEST:
            return {
                ...state,
                error: '',
                loading: true
            };
        case GET_USERS_SUCCESS:
            return {
                ...state,
                list: action.response.list,
                limit: action.response.limit,
                offset: action.response.offset,
                count: action.response.count,
                loading: false
            };
        case GET_USERS_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case PUT_USERS_REQUEST:
            return {
                ...state,
                error: '',
                loading: true
            };
        case PUT_USERS_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case PUT_USERS_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case DELETE_USERS_REQUEST:
            return {
                ...state,
                error: '',
                loading: true
            };
        case DELETE_USERS_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case DELETE_USERS_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}