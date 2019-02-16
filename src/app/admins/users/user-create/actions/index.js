import { callApi } from '../../../../../common/services/api/api'
import { RequestBuilder } from '../../../../../common/services/api/RequestBuilder'
import { CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAIL } from '../constants'
import { Methods } from "../../../../../common/services/api/Request"

export function createUser(user) {
    return (dispatch) => {

        const request = new RequestBuilder()
            .addEndpoint('/users')
            .addMethod(Methods.POST)
            .addBody(user)
            .addHeaders({ 'Auth-Token': 'asdasd' })
            .build();

        dispatch({ type: CREATE_USER_REQUEST, user: user });

        return callApi(request).then(response =>
            dispatch(creatUserSuccess(response))
        ).catch(err => {
            dispatch(createUserFail(err))
        });
    }
}

function creatUserSuccess(response) {
    return {
        type: CREATE_USER_SUCCESS,
        user: response
    }
}

function createUserFail(err) {
    return {
        type: CREATE_USER_FAIL,
        error: err
    }
}