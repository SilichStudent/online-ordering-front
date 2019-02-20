import { combineReducers } from 'redux';

import loginReducer from '../../app/login/login.reducer';
import usersReducer from '../../app/admins/dashboard/users/reducers';
import createUserReducer from '../../app/admins/dashboard/users/user-create/reducers';
import managersReducer from '../../app/admins/dashboard/managers/reducers';
import categoriesReducer from '../../app/admins/dashboard/products/reducers';

const rootReducer = combineReducers({
    login: loginReducer,
    createUser: createUserReducer,
    users: usersReducer,
    managers: managersReducer,
    categoriesTree: categoriesReducer
});

export default rootReducer;