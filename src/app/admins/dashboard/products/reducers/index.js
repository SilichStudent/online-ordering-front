import { GET_CATEGORIES_TREE_REQUEST, GET_CATEGORIES_TREE_SUCCESS, GET_CATEGORIES_TREE_FAIL } from '../constants'

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
        case GET_CATEGORIES_TREE_REQUEST:
            return {
                ...state,
                error: '',
                loading: true
            };
        case GET_CATEGORIES_TREE_SUCCESS:
            return {
                ...state,
                list: action.response.list,
                limit: action.response.limit,
                offset: action.response.offset,
                count: action.response.count,
                loading: false
            };
        case GET_CATEGORIES_TREE_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}