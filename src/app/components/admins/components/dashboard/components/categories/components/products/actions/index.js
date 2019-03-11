import { callApi } from '../../../../../../../../../../common/services/api/api';
import { RequestBuilder } from '../../../../../../../../../../common/services/api/RequestBuilder';
import { Methods } from '../../../../../../../../../../common/services/api/Request';
import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } from '../constants';

export const loadProducts = (id) => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint(`/products/category/${id}`)
            .addMethod(Methods.GET)
            .build();

        
        dispatch({ type: GET_PRODUCTS_REQUEST });

        callApi(request).then( response => {
            dispatch({ type: GET_PRODUCTS_SUCCESS, response })
        }).catch( err => {
            dispatch({ type: GET_PRODUCTS_FAIL, error: err })
        })
    }
}