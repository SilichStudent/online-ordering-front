import { callApi } from '../../../../../common/services/api/api';
import { RequestBuilder } from '../../../../../common/services/api/RequestBuilder';
import { Methods } from '../../../../../common/services/api/Request';
import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL } from '../constants';

export const loadUsers = (limit, offset) => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint('/users')
            .addMethod(Methods.GET)
            .addParams({ limit, offset })
            .addHeaders({ 'Auth-Token': 'asdasd' })
            .build();

        
        dispatch({ type: GET_USERS_REQUEST });

        callApi(request).then( response => {
            dispatch({ type: GET_USERS_SUCCESS, response })
        }).catch( err => {
            dispatch({ type: GET_USERS_FAIL, error: err })
        })
    }
}