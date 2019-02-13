import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'


import configureStore from './js/store/configureStore'
import Routes from './js/routes/routes'

const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <Routes/>
    </Provider>
), document.getElementById("app"));