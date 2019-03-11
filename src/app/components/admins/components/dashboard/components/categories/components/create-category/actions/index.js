import { callApi } from '../../../../../../../../../../common/services/api/api'
import { RequestBuilder } from '../../../../../../../../../../common/services/api/RequestBuilder'
import { CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, CREATE_CATEGORY_FAIL } from '../constants'
import { Methods } from "../../../../../../../../../../common/services/api/Request"

export function createCategory(category) {
    return (dispatch) => {

        const request = new RequestBuilder()
            .addEndpoint('/categories')
            .addMethod(Methods.POST)
            .addBody(category)
            .build();

        dispatch({ type: CREATE_CATEGORY_REQUEST });

        return callApi(request).then(response =>
            dispatch(creatManagerSuccess(response))
        ).catch(err => {
            dispatch(createManagerFail(err))
        });
    }
}

function creatManagerSuccess(response) {
    return {
        type: CREATE_CATEGORY_SUCCESS,
        response
    }
}

function createManagerFail(err) {
    return {
        type: CREATE_CATEGORY_FAIL,
        error: err
    }
}