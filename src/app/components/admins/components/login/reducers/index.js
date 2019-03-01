import { AUTH_MANAGER_FAIL, AUTH_MANAGER_SUCCESS, AUTH_MANAGER_REQUEST } from '../constants';
import { GET_CURRENT_MANAGER_REQUEST, GET_CURRENT_MANAGER_SUCCESS, GET_CURRENT_MANAGER_FAIL } from '../constants';
import * as tokenService from '../../../../../../common/services/token.service';

const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENT_MANAGER_REQUEST:
        case AUTH_MANAGER_REQUEST:
            return {
                ...state,
                error: '',
                loading: true
            };
        case AUTH_MANAGER_SUCCESS:
            tokenService.setManagerToken(action.response.token);
            return {
                ...state,
                ...action.response.user,
                loading: false
            };
        case GET_CURRENT_MANAGER_SUCCESS:
            return {
                ...state,
                ...action.response,
                loading: false
            };
        case GET_CURRENT_MANAGER_FAIL:
        case AUTH_MANAGER_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}