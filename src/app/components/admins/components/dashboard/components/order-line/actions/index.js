import { callApi } from "../../../../../../../../common/services/api/api";
import { RequestBuilder } from "../../../../../../../../common/services/api/RequestBuilder";
import { Methods } from "../../../../../../../../common/services/api/Request";

import { GET_ORDER_LINES_REQUEST, GET_ORDER_LINES_SUCCESS, GET_ORDER_LINES_FAIL } from '../constants'
import { DELETE_ORDER_LINE_REQUEST, DELETE_ORDER_LINE_SUCCESS, DELETE_ORDER_LINE_FAIL } from '../constants'

export const loadOrderLines = (limit, offset) => {
    return dispatch => {
        const request = new RequestBuilder()
            .addEndpoint("/order-lines")
            .addMethod(Methods.GET)
            .addParams({ limit, offset })
            .build();

        dispatch({ type: GET_ORDER_LINES_REQUEST });

        callApi(request)
            .then(response => {
                dispatch({ type: GET_ORDER_LINES_SUCCESS, response });
            }).catch(err => {
                dispatch({ type: GET_ORDER_LINES_FAIL, error: err.stack });
            });
    };
};

export const deleteOrderLine = (id) => {
    return dispatch => {
        const request = new RequestBuilder()
            .addEndpoint(`/order-lines/${id}`)
            .addMethod(Methods.DELETE)
            .build();

        dispatch({ type: DELETE_ORDER_LINE_REQUEST });

        callApi(request)
            .then(response => {
                dispatch({ type: DELETE_ORDER_LINE_SUCCESS, uuid: id });
            }).catch(err => {
                dispatch({ type: DELETE_ORDER_LINE_FAIL, error: err.stack });
            });
    };
};