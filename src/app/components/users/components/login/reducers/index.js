import { AUTH_USER_REQUEST, AUTH_USER_SUCCESS, AUTH_USER_FAIL } from '../constants';
import { GET_CURRENT_USER_REQUEST, GET_CURRENT_USER_SUCCESS, GET_CURRENT_USER_FAIL } from '../constants';
import * as tokenService from '../../../../../../common/services/token.service';

const initialState = {
    error: '',
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENT_USER_REQUEST:
        case AUTH_USER_REQUEST:
            return {
                ...state,
                error: '',
                loading: true
            };
        case AUTH_USER_SUCCESS:
            tokenService.setUserToken(action.response.token);
            return {
                ...state,
                ...action.response.user,
                loading: false
            };
        case GET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                ...action.response,
                loading: false
            };
        case GET_CURRENT_USER_FAIL:
        case AUTH_USER_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}