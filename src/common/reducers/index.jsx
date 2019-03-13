import { combineReducers } from 'redux';

import usersReducer from '../../app/components/admins/components/dashboard/components/users/reducers';
import managersReducer from '../../app/components/admins/components/dashboard/components/managers/reducers';
import categoriesReducer from '../../app/components/admins/components/dashboard/components/categories/reducers';
import orderLinesReducer from '../../app/components/admins/components/dashboard/components/order-line/reducers';
import currentUserReducer from '../../app/components/users/components/login/reducers';
import currentManagerReducer from '../../app/components/admins/components/login/reducers';
import adminProductsReducer from '../../app/components/admins/components/dashboard/components/categories/components/products/reducers';
import createOrderLineReducer from '../../app/components/admins/components/dashboard/components/order-line/component/create-order-line/reducers';
import usersOrderLineReducer from '../../app/components/users/components/dashboard/components/order-line/reducers';

const rootReducer = combineReducers({
    users: usersReducer,
    managers: managersReducer,
    categoriesTree: categoriesReducer,
    orderLines: orderLinesReducer,
    currentUser: currentUserReducer,
    currentManager: currentManagerReducer,
    adminProducts: adminProductsReducer,
    createOrderLine: createOrderLineReducer,
    userOrderLines: usersOrderLineReducer
});

export default rootReducer;