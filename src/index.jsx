import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'


import configureStore from './common/store/configureStore'
import Routes from './app/app-routes.container'

const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <Routes/>
    </Provider>
), document.getElementById("app"));