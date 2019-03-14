import { callApi } from '../../../../../../../../../../common/services/api/api';
import { RequestBuilder } from '../../../../../../../../../../common/services/api/RequestBuilder';
import { Methods } from '../../../../../../../../../../common/services/api/Request';

import { CHANGE_USER_PASSWORD_REQUEST, CHANGE_USER_PASSWORD_SUCCESS, CHANGE_USER_PASSWORD_FAIL } from '../constants';

export const changePassword = (body) => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint('/users/change-password')
            .addMethod(Methods.POST)
            .addBody(body)
            .build();

        dispatch({ type: CHANGE_USER_PASSWORD_REQUEST });

        callApi(request).then(response => {
            dispatch({ type: CHANGE_USER_PASSWORD_SUCCESS, name: body.name })
        }).catch(err => {
            dispatch({ type: CHANGE_USER_PASSWORD_FAIL, error: err })
        })
    }
}