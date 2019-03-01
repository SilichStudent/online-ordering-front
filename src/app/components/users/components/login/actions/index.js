import { callApi } from '../../../../../../common/services/api/api';
import { RequestBuilder } from '../../../../../../common/services/api/RequestBuilder';
import { Methods } from '../../../../../../common/services/api/Request';
import { AUTH_USER_REQUEST, AUTH_USER_SUCCESS, AUTH_USER_FAIL } from '../constants';
import { GET_CURRENT_USER_REQUEST, GET_CURRENT_USER_SUCCESS, GET_CURRENT_USER_FAIL } from '../constants';

export const authUser = (authRequest) => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint('/users/signIn')
            .addMethod(Methods.POST)
            .addBody(authRequest)
            .build();


        dispatch({ type: AUTH_USER_REQUEST });

        callApi(request).then(response => {
            dispatch({ type: AUTH_USER_SUCCESS, response })
        }).catch(err => {
            dispatch({ type: AUTH_USER_FAIL, error: err })
        })
    }
}

export const loadCurrentUser = () => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint('/users/current')
            .addMethod(Methods.GET)
            .build();

        dispatch({ type: GET_CURRENT_USER_REQUEST });

        callApi(request).then(response => {
            dispatch({ type: GET_CURRENT_USER_SUCCESS, response })
        }).catch(err => {
            dispatch({ type: GET_CURRENT_USER_FAIL, error: err })
        })
    }
}