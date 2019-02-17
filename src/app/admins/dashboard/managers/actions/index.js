import { callApi } from '../../../../../common/services/api/api';
import { RequestBuilder } from '../../../../../common/services/api/RequestBuilder';
import { Methods } from '../../../../../common/services/api/Request';
import { GET_MANAGERS_REQUEST, GET_MANAGERS_SUCCESS, GET_MANAGERS_FAIL } from '../constants';

export const loadManagers = (limit, offset) => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint('/managers')
            .addMethod(Methods.GET)
            .addParams({ limit, offset })
            .addHeaders({ 'Auth-Token': 'asdasd' })
            .build();


        dispatch({ type: GET_MANAGERS_REQUEST });

        callApi(request).then(response => {
            dispatch({ type: GET_MANAGERS_SUCCESS, response })
        }).catch(err => {
            dispatch({ type: GET_MANAGERS_FAIL, error: err })
        })
    }
}