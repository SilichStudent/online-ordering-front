import { GET_MANAGERS_REQUEST, GET_MANAGERS_SUCCESS, GET_MANAGERS_FAIL } from '../constants';
import { DELETE_MANAGER_REQUEST, DELETE_MANAGER_SUCCESS, DELETE_MANAGER_FAIL } from '../constants';
import { CREATE_MANAGER_REQUEST, CREATE_MANAGER_SUCCESS, CREATE_MANAGER_FAIL } from '../components/manager-create/constants';

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
        case GET_MANAGERS_REQUEST:
        case CREATE_MANAGER_REQUEST:
        case DELETE_MANAGER_REQUEST:
            return {
                ...state,
                error: '',
                loading: true
            };
        case GET_MANAGERS_SUCCESS:
            return {
                ...state,
                list: action.response.list,
                limit: action.response.limit,
                offset: action.response.offset,
                count: action.response.count,
                loading: false
            };
        case DELETE_MANAGER_SUCCESS:
            const listDelete = state.list.filter(manager => manager.uuid !== action.response.uuid);
            return {
                ...state,
                list: listDelete,
                loading: false
            };
        case CREATE_MANAGER_SUCCESS:
            const listCreate = state.list.slice();
            listCreate.push(action.response);
            return {
                ...state,
                list: listCreate,
                loading: false
            };
        case GET_MANAGERS_FAIL:
        case CREATE_MANAGER_FAIL:
        case DELETE_MANAGER_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}