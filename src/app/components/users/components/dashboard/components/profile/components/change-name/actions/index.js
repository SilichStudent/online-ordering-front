import { callApi } from '../../../../../../../../../../common/services/api/api';
import { RequestBuilder } from '../../../../../../../../../../common/services/api/RequestBuilder';
import { Methods } from '../../../../../../../../../../common/services/api/Request';

import { CHANGE_USER_NAME_REQUEST, CHANGE_USER_NAME_SUCCESS, CHANGE_USER_NAME_FAIL } from '../constants';

export const changeName = (body) => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint('/users/change-name')
            .addMethod(Methods.POST)
            .addBody(body)
            .build();

        dispatch({ type: CHANGE_USER_NAME_REQUEST });

        callApi(request).then(response => {
            dispatch({ type: CHANGE_USER_NAME_SUCCESS, name: body.name })
        }).catch(err => {
            dispatch({ type: CHANGE_USER_NAME_FAIL, error: err })
        })
    }
}