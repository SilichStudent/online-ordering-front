import { callApi } from '../../../../../../../../common/services/api/api';
import { RequestBuilder } from '../../../../../../../../common/services/api/RequestBuilder';
import { Methods } from '../../../../../../../../common/services/api/Request';
import { GET_CATEGORIES_TREE_REQUEST, GET_CATEGORIES_TREE_SUCCESS, GET_CATEGORIES_TREE_FAIL } from '../constants';
import { DELETE_CATEGORY_REQUEST, DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAIL } from '../constants';
import { DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL } from '../constants';

export const loadCategories = () => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint('/categories')
            .addMethod(Methods.GET)
            .build();

        
        dispatch({ type: GET_CATEGORIES_TREE_REQUEST });

        callApi(request).then( response => {
            dispatch({ type: GET_CATEGORIES_TREE_SUCCESS, response })
        }).catch( err => {
            dispatch({ type: GET_CATEGORIES_TREE_FAIL, error: err })
        })
    }
}

export const deleteCategory = (id) => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint(`/categories/${id}`)
            .addMethod(Methods.DELETE)
            .build();

        
        dispatch({ type: DELETE_PRODUCT_REQUEST });

        callApi(request).then( response => {
            dispatch({ type: DELETE_PRODUCT_SUCCESS, response })
        }).catch( err => {
            dispatch({ type: DELETE_PRODUCT_FAIL, error: err })
        })
    }
}

export const deleteProduct = (id) => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint(`/products/${id}`)
            .addMethod(Methods.DELETE)
            .build();

        
        dispatch({ type: DELETE_CATEGORY_REQUEST });

        callApi(request).then( response => {
            dispatch({ type: DELETE_CATEGORY_SUCCESS, response })
        }).catch( err => {
            dispatch({ type: DELETE_CATEGORY_FAIL, error: err })
        })
    }
}