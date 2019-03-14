import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } from '../constants';
import { DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL } from '../constants';
import { CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAIL } from '../components/create-product/constants';
import { UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAIL } from '../components/edit-product/constants';

const initialState = {
    list: [],
    count: 0,
    error: '',
    loading: false,
}

export default (state = initialState, action) => {

    switch(action.type){
        case UPDATE_PRODUCT_REQUEST:
        case DELETE_PRODUCT_REQUEST:
        case CREATE_PRODUCT_REQUEST:
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
        case UPDATE_PRODUCT_SUCCESS:
            const listUpdate = state.list.map( product => {
                if(product.uuid === action.response.uuid){
                    return action.response;
                }
                return product;
            });
            return {
                ...state,
                list: listUpdate,
                loading: false
            };
        case CREATE_PRODUCT_SUCCESS:
            const listCreate = state.list.slice();
            listCreate.push(action.response);
            return {
                ...state,
                list: listCreate,
                loading: false
            };
        case DELETE_PRODUCT_SUCCESS:
            const listDelete = state.list.filter( product => product.uuid !== action.uuid);
            return {
                ...state,
                list: listDelete,
                loading: false
            };
        case UPDATE_PRODUCT_FAIL:
        case DELETE_PRODUCT_FAIL:
        case CREATE_PRODUCT_FAIL:
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