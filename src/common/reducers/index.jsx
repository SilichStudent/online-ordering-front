import { combineReducers } from 'redux';

import loginReducer from '../../app/login/login.reducer';
import usersReducer from '../../app/admins/dashboard/users/reducers';
import createUserReducer from '../../app/admins/dashboard/users/user-create/reducers';

const rootReducer = combineReducers({
    login: loginReducer,
    createUser: createUserReducer,
    users: usersReducer
});

export default rootReducer;