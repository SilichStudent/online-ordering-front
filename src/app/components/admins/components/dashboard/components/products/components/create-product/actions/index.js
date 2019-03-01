import { callApi } from '../../../../../../../../../../common/services/api/api'
import { RequestBuilder } from '../../../../../../../../../../common/services/api/RequestBuilder'
import { CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAIL } from '../constants'
import { Methods } from "../../../../../../../../../../common/services/api/Request"

export function createProduct(product) {
    return (dispatch) => {

        const request = new RequestBuilder()
            .addEndpoint('/products')
            .addMethod(Methods.POST)
            .addBody(product)
            .build();

        dispatch({ type: CREATE_PRODUCT_REQUEST });

        return callApi(request).then(response =>
            dispatch(creatProductSuccess(response))
        ).catch(err => {
            dispatch(createProductFail(err))
        });
    }
}

function creatProductSuccess(response) {
    return {
        type: CREATE_PRODUCT_SUCCESS,
        response
    }
}

function createProductFail(err) {
    return {
        type: CREATE_PRODUCT_FAIL,
        error: err
    }
}