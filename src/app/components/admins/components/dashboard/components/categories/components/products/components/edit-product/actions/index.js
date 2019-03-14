import { callApi } from '../../../../../../../../../../../../common/services/api/api';
import { RequestBuilder } from '../../../../../../../../../../../../common/services/api/RequestBuilder';
import { Methods } from '../../../../../../../../../../../../common/services/api/Request';

import { UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAIL } from '../constants';
import { GET_PRODUCT_TO_UPDATE_REQUEST, GET_PRODUCT_TO_UPDATE_SUCCESS, GET_PRODUCT_TO_UPDATE_FAIL } from '../constants';

export const updateProduct = (id, body) => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint(`/products/${id}`)
            .addMethod(Methods.PUT)
            .addBody(body)
            .build();

        dispatch({ type: UPDATE_PRODUCT_REQUEST });

        callApi(request).then(response => {
            dispatch({ type: UPDATE_PRODUCT_SUCCESS, response })
        }).catch(err => {
            dispatch({ type: UPDATE_PRODUCT_FAIL, error: err })
        })
    }
}

export const getProduct = (id) => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint(`/products/${id}`)
            .addMethod(Methods.GET)
            .build();

        dispatch({ type: GET_PRODUCT_TO_UPDATE_REQUEST });

        callApi(request).then(response => {
            dispatch({ type: GET_PRODUCT_TO_UPDATE_SUCCESS, response })
        }).catch(err => {
            dispatch({ type: GET_PRODUCT_TO_UPDATE_FAIL, error: err })
        })
    }
}