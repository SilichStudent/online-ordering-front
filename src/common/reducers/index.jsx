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
import usersOrderLineProductsReducer from '../../app/components/users/components/dashboard/components/order-line/components/products/reducers';
import userCartReducer from '../../app/components/users/components/dashboard/components/cart/reducers';
import editProductReducer from '../../app/components/admins/components/dashboard/components/categories/components/products/components/edit-product/reducers';
import editOrderLineReducer from '../../app/components/admins/components/dashboard/components/order-line/component/edit-order-line/reducers';
import userChangePassReducer from '../../app/components/users/components/dashboard/components/profile/components/change-password/reducers';

const rootReducer = combineReducers({
    users: usersReducer,
    managers: managersReducer,
    categoriesTree: categoriesReducer,
    orderLines: orderLinesReducer,
    currentUser: currentUserReducer,
    currentManager: currentManagerReducer,
    adminProducts: adminProductsReducer,
    createOrderLine: createOrderLineReducer,
    userOrderLine: usersOrderLineReducer,
    usersOrderLineProducts: usersOrderLineProductsReducer,
    userCart: userCartReducer,
    editProduct: editProductReducer,
    editOrderLine: editOrderLineReducer,
    userChangePass: userChangePassReducer
});

export default rootReducer;