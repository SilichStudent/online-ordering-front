import { callApi } from '../../../../../../../../../../common/services/api/api'
import { RequestBuilder } from '../../../../../../../../../../common/services/api/RequestBuilder'
import { CREATE_MANAGER_REQUEST, CREATE_MANAGER_SUCCESS, CREATE_MANAGER_FAIL } from '../constants'
import { Methods } from "../../../../../../../../../../common/services/api/Request"

export function createManager(manager) {
    return (dispatch) => {

        const request = new RequestBuilder()
            .addEndpoint('/managers')
            .addMethod(Methods.POST)
            .addBody(manager)
            .build();

        dispatch({ type: CREATE_MANAGER_REQUEST });

        return callApi(request).then(response =>
            dispatch(creatManagerSuccess(response))
        ).catch(err => {
            dispatch(createManagerFail(err))
        });
    }
}

function creatManagerSuccess(response) {
    return {
        type: CREATE_MANAGER_SUCCESS,
        response
    }
}

function createManagerFail(err) {
    return {
        type: CREATE_MANAGER_FAIL,
        error: err
    }
}