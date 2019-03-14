
import { CHANGE_USER_PASSWORD_REQUEST, CHANGE_USER_PASSWORD_SUCCESS, CHANGE_USER_PASSWORD_FAIL } from '../constants';

const initialState = {
};


export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_USER_PASSWORD_REQUEST:
            return {
                ...state,
                error: '',
                loading: true
            };
        case CHANGE_USER_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case CHANGE_USER_PASSWORD_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}