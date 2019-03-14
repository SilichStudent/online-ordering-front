import { GET_CATEGORIES_TREE_REQUEST, GET_CATEGORIES_TREE_SUCCESS, GET_CATEGORIES_TREE_FAIL } from '../constants'
import { CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, CREATE_CATEGORY_FAIL } from '../components/create-category/constants'
import { DELETE_CATEGORY_REQUEST, DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAIL } from '../constants';
import { RENAME_CATEGORY_REQUEST, RENAME_CATEGORY_SUCCESS, RENAME_CATEGORY_FAIL } from '../components/rename-category/constants'

const initialState = {
    list: [],
    limit: 10,
    offset: 0,
    count: 0,
    error: '',
    loading: false,
    categoryKey: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RENAME_CATEGORY_REQUEST:
        case CREATE_CATEGORY_REQUEST:
        case DELETE_CATEGORY_REQUEST:
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
                loading: false,
                categoryKey: action.response.list && action.response.list.length > 0 && action.response.list[0].uuid 
            };
        case CREATE_CATEGORY_SUCCESS:
            const listCreate = state.list.slice();
            listCreate.push(action.response);
            return {
                ...state,
                list: listCreate,
                loading: false
            };
        case DELETE_CATEGORY_SUCCESS:
            const listDelete = state.list.filter( category => category.uuid !== action.uuid);
            return {
                ...state,
                list: listDelete,
                loading: false
            };
        case RENAME_CATEGORY_SUCCESS:
            const listUpdate = state.list.map( category => {
                if(category.uuid !== action.response.uuid){
                    return category;
                }
                return action.response;
            });
            return {
                ...state,
                list: listUpdate,
                loading: false
            };
        case RENAME_CATEGORY_FAIL:
        case GET_CATEGORIES_TREE_FAIL:
        case DELETE_CATEGORY_FAIL:
        case CREATE_CATEGORY_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}