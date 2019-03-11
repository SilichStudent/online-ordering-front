import { callApi } from '../../../../../../../../../../common/services/api/api'
import { RequestBuilder } from '../../../../../../../../../../common/services/api/RequestBuilder'
import { RENAME_CATEGORY_REQUEST, RENAME_CATEGORY_SUCCESS, RENAME_CATEGORY_FAIL } from '../constants'
import { Methods } from "../../../../../../../../../../common/services/api/Request"

export function renameCategory(id, category) {
    return (dispatch) => {

        const request = new RequestBuilder()
            .addEndpoint(`/categories/${id}`)
            .addMethod(Methods.PUT)
            .addBody(category)
            .build();

        dispatch({ type: RENAME_CATEGORY_REQUEST });

        return callApi(request).then(response =>
            dispatch(renameCategorySuccess(response))
        ).catch(err => {
            dispatch(renameCategoryFail(err))
        });
    }
}

function renameCategorySuccess(response) {
    return {
        type: RENAME_CATEGORY_SUCCESS,
        response
    }
}

function renameCategoryFail(err) {
    return {
        type: RENAME_CATEGORY_FAIL,
        error: err
    }
}