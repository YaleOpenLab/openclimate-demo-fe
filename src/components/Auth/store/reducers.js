import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "./actions";

const initialState = {
    info: [],
    isLoading: false,
    authorized: false,
    error: null
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case LOGIN_SUCCESS:
            return {
                info: action.payload.Entity.U,
                isLoading: false,
                authorized: true,
                error: null
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default loginReducer;