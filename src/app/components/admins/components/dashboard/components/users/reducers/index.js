import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL } from '../constants'
import { PUT_USERS_REQUEST, PUT_USERS_SUCCESS, PUT_USERS_FAIL } from '../constants'
import { DELETE_USERS_REQUEST, DELETE_USERS_SUCCESS, DELETE_USERS_FAIL } from '../constants'
import { CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAIL } from '../components/user-create/constants'

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
        case DELETE_USERS_REQUEST:
        case CREATE_USER_REQUEST:
        case PUT_USERS_REQUEST:
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
        case PUT_USERS_SUCCESS:
            const updatedUser = action.response;
            const listPut = state.list.map(user => {
                if (user.id === updatedUser.id) {
                    return updatedUser;
                }
                return user;
            });
            return {
                ...state,
                list: listPut,
                loading: false
            };
        case DELETE_USERS_SUCCESS:
            const listDelete = state.list.filter(user => user.id !== action.response.id);
            return {
                ...state,
                list: listDelete,
                loading: false
            };
        case CREATE_USER_SUCCESS:
            const listCreate = state.list.slice();
            listCreate.push(action.response);
            return {
                ...state,
                list: listCreate,
                loading: false
            };
        case PUT_USERS_FAIL:
        case CREATE_USER_FAIL:
        case DELETE_USERS_FAIL:
        case GET_USERS_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}