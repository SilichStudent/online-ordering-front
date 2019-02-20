import { callApi } from '../../../../../common/services/api/api';
import { RequestBuilder } from '../../../../../common/services/api/RequestBuilder';
import { Methods } from '../../../../../common/services/api/Request';
import { GET_CATEGORIES_TREE_REQUEST, GET_CATEGORIES_TREE_SUCCESS, GET_CATEGORIES_TREE_FAIL } from '../constants';

export const loadCategoriesTree = (limit, offset) => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint('/categories')
            .addMethod(Methods.GET)
            .addParams({ limit, offset })
            .addHeaders({ 'Auth-Token': 'asdasd' })
            .build();

        
        dispatch({ type: GET_CATEGORIES_TREE_REQUEST });

        callApi(request).then( response => {
            dispatch({ type: GET_CATEGORIES_TREE_SUCCESS, response })
        }).catch( err => {
            dispatch({ type: GET_CATEGORIES_TREE_FAIL, error: err })
        })
    }
}