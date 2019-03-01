import { combineReducers } from 'redux';

import usersReducer from '../../app/components/admins/components/dashboard/components/users/reducers';
import managersReducer from '../../app/components/admins/components/dashboard/components/managers/reducers';
import categoriesReducer from '../../app/components/admins/components/dashboard/components/products/reducers';
import orderLinesReducer from '../../app/components/admins/components/dashboard/components/order-line/reducers';
import currentUserReducer from '../../app/components/users/components/login/reducers';
import currentManagerReducer from '../../app/components/admins/components/login/reducers';

const rootReducer = combineReducers({
    users: usersReducer,
    managers: managersReducer,
    categoriesTree: categoriesReducer,
    orderLines: orderLinesReducer,
    currentUser: currentUserReducer,
    currentManager: currentManagerReducer
});

export default rootReducer;