import { CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAIL } from '../constants'

const initialState = {
    user: {},
    error: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER_REQUEST:
            return {
                ...state,
                error: ''
            };
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                user: action.user
            };
        case CREATE_USER_FAIL:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}