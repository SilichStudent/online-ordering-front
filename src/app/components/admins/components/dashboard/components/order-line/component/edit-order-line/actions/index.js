import { callApi } from '../../../../../../../../../../common/services/api/api';
import { RequestBuilder } from '../../../../../../../../../../common/services/api/RequestBuilder';
import { Methods } from "../../../../../../../../../../common/services/api/Request";

import { UPDATE_ORDER_LINE_REQUEST, UPDATE_ORDER_LINE_SUCCESS, UPDATE_ORDER_LINE_FAIL } from '../constants';
import { GET_ORDER_LINE_TO_UPDATE_REQUEST, GET_ORDER_LINE_TO_UPDATE_SUCCESS, GET_ORDER_LINE_TO_UPDATE_FAIL } from '../constants';

export function updateOrderLine(id, orderLine) {
    return (dispatch) => {

        const request = new RequestBuilder()
            .addEndpoint(`/order-lines/${id}`)
            .addMethod(Methods.PUT)
            .addBody(orderLine)
            .build();

        dispatch({ type: UPDATE_ORDER_LINE_REQUEST });

        return callApi(request).then(response =>
            dispatch({
                type: UPDATE_ORDER_LINE_SUCCESS,
                response
            })
        ).catch(err => {
            dispatch({
                type: UPDATE_ORDER_LINE_FAIL,
                error: err
            })
        });
    }
}

export const loadOrderLine = (id) => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint(`/order-lines/${id}`)
            .addMethod(Methods.GET)
            .build();

        
        dispatch({ type: GET_ORDER_LINE_TO_UPDATE_REQUEST });

        callApi(request).then( response => {
            dispatch({ type: GET_ORDER_LINE_TO_UPDATE_SUCCESS, response })
        }).catch( err => {
            dispatch({ type: GET_ORDER_LINE_TO_UPDATE_FAIL, error: err })
        })
    }
};
