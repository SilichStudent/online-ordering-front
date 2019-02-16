import { combineReducers } from 'redux'

import loginReducer from '../../app/login/login.reducer'
import createUserReducer from '../../app/admins/users/user-create/reducers'

const rootReducer = combineReducers({
    login: loginReducer,
    createUser: createUserReducer
});

export default rootReducer;