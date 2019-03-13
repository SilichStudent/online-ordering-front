import { callApi } from '../../../../../../../../common/services/api/api';
import { RequestBuilder } from '../../../../../../../../common/services/api/RequestBuilder';
import { Methods } from '../../../../../../../../common/services/api/Request';
import { GET_ORDER_LINE_REQUEST, GET_ORDER_LINE_SUCCESS, GET_ORDER_LINE_FAIL } from '../constants';

export const loadOrderLine = () => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint('/order-lines/published')
            .addMethod(Methods.GET)
            .build();


        dispatch({ type: GET_ORDER_LINE_REQUEST });

        callApi(request).then(response => {
            dispatch({ type: GET_ORDER_LINE_SUCCESS, response })
        }).catch(err => {
            dispatch({ type: GET_ORDER_LINE_FAIL, error: err })
        })
    }
}