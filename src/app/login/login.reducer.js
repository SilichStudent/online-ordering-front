const initialState = {
    currentUser : {}
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case "USER_LOGIN":
            return Object.assign({}, state, { lol: "kek" });
        default:
            return Object.assign({}, state);
    }
}