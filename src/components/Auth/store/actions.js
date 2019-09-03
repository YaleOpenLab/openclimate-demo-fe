export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const fetchLogin = payload => ({
    type: LOGIN,
    payload
});

export const fetchLoginSuccess = user => ({
    type: LOGIN_SUCCESS,
    payload: user
});

export const fetchLoginFailure = message => ({
    type: LOGIN_FAILURE,
    payload: message
});
