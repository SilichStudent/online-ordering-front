export default function loginReduser(state, action){
    switch(action.type){
        case "USER_LOGIN":
            return Object.assign({}, state, { lol : "kek"});
        default:
            return Object.assign({}, state);
    }
}