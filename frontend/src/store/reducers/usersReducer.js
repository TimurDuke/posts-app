import {
    CLEAR_REGISTER_ERRORS,
    REGISTER_USER_FAILURE,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS
} from "../actions/usersActions";


const initialState = {
    user: null,
    registerLoading: false,
    registerError: null,
    loginLoading: false,
    loginError: null,
};

const userReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case CLEAR_REGISTER_ERRORS:
            return {...state, registerError: null};

        case REGISTER_USER_REQUEST:
            return {...state, registerError: null, registerLoading: true};
        case REGISTER_USER_SUCCESS:
            return {...state, registerError: null, registerLoading: false, user: actions.userData};
        case REGISTER_USER_FAILURE:
            return {...state, registerError: actions.error, registerLoading: false};

        default:
            return state;
    }
};

export default userReducer;