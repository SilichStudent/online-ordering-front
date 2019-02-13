import { createStore } from 'redux'

// import redusers from '../redusers/index'

const initialState = {};

const reduser = (state = initialState, action) => {
    switch(action.type){
        case "USER_LOGIN":
            return Object.assign({}, state, { lol : "kek"});
        default:
            return state;
    }
};

export default function configureStore(preloadedState){
    const store = createStore(reduser);

    return store;
}