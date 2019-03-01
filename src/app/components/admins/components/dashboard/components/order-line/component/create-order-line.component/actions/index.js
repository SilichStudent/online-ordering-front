import { callApi } from '../../../../../../../../../../common/services/api/api'
import { RequestBuilder } from '../../../../../../../../../../common/services/api/RequestBuilder'
import { CREATE_ORDER_LINE_REQUEST, CREATE_ORDER_LINE_SUCCESS, CREATE_ORDER_LINE_FAIL } from '../constants'
import { Methods } from "../../../../../../../../../../common/services/api/Request"

export function createOrderLine(manager) {
    return (dispatch) => {

        const request = new RequestBuilder()
            .addEndpoint('/managers')
            .addMethod(Methods.POST)
            .addBody(manager)
            .build();

        dispatch({ type: CREATE_ORDER_LINE_REQUEST });

        return callApi(request).then(response =>
            dispatch({
                type: CREATE_ORDER_LINE_SUCCESS,
                response
            })
        ).catch(err => {
            dispatch({
                type: CREATE_ORDER_LINE_FAIL,
                error: err
            })
        });
    }
}