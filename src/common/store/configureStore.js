import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers'

export default function configureStore(preloadedState){
    const store = createStore(
        reducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk)));

    return store;
}