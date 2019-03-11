import { callApi } from '../../../../../../../../../../../../common/services/api/api';
import { RequestBuilder } from '../../../../../../../../../../../../common/services/api/RequestBuilder';
import { Methods } from '../../../../../../../../../../../../common/services/api/Request';

import { CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAIL } from '../constants';

export const createProduct = (body) => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint(`/products`)
            .addMethod(Methods.POST)
            .addBody(body)
            .build();

        dispatch({ type: CREATE_PRODUCT_REQUEST });

        callApi(request).then( response => {
            dispatch({ type: CREATE_PRODUCT_SUCCESS, response })
        }).catch( err => {
            dispatch({ type: CREATE_PRODUCT_FAIL, error: err })
        })
    }
}