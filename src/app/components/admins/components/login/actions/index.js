import { callApi } from '../../../../../../common/services/api/api';
import { RequestBuilder } from '../../../../../../common/services/api/RequestBuilder';
import { Methods } from '../../../../../../common/services/api/Request';
import { AUTH_MANAGER_REQUEST, AUTH_MANAGER_SUCCESS, AUTH_MANAGER_FAIL } from '../constants';
import { GET_CURRENT_MANAGER_REQUEST, GET_CURRENT_MANAGER_SUCCESS, GET_CURRENT_MANAGER_FAIL } from '../constants';

export const authManager = (authRequest) => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint('/managers/signIn')
            .addMethod(Methods.POST)
            .addBody(authRequest)
            .build();


        dispatch({ type: AUTH_MANAGER_REQUEST });

        callApi(request).then(response => {
            dispatch({ type: AUTH_MANAGER_SUCCESS, response })
        }).catch(err => {
            dispatch({ type: AUTH_MANAGER_FAIL, error: err })
        })
    }
}

export const loadCurrentManager = () => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint('/managers/current')
            .addMethod(Methods.GET)
            .build();

        dispatch({ type: GET_CURRENT_MANAGER_REQUEST });

        callApi(request).then(response => {
            dispatch({ type: GET_CURRENT_MANAGER_SUCCESS, response })
        }).catch(err => {
            dispatch({ type: GET_CURRENT_MANAGER_FAIL, error: err })
        })
    }
}