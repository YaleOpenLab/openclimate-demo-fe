export const USER_ACCOUNT = "FETCH_USER_ACCOUNT";
export const USER_ACCOUNT_SUCCESS = "FETCH_USER_ACCOUNT_SUCCESS";
export const USER_ACCOUNT_FAILURE = "FETCH_USER_ACCOUNT_FAILURE";
export const USER_ACCOUNT_UPDATE = "USER_ACCOUNT_UPDATE";
export const USER_ACCOUNT_UPDATE_SUCCESS = "USER_ACCOUNT_UPDATE_SUCCESS";
export const USER_ACCOUNT_UPDATE_FAILURE = "USER_ACCOUNT_UPDATE_FAILURE";
export const USER_ACCOUNT_LOGOUT = "USER_ACCOUNT_LOGOUT";
export const USER_ACCOUNT_REGISTER = "USER_ACCOUNT_REGISTER";
export const USER_ACCOUNT_REGISTER_SUCCESS = "USER_ACCOUNT_REGISTER_SUCCESS";
export const USER_ACCOUNT_REGISTER_FAILURE = "USER_ACCOUNT_REGISTER_FAILURE";
export const USER_ACCOUNT_REGISTER_ADD_FIELDS = "USER_ACCOUNT_REGISTER_ADD_FIELDS";

export const fetchUserAccount = payload => ({
  type: USER_ACCOUNT,
  payload
});

export const fetchUserAccountSuccess = account => ({
  type: USER_ACCOUNT_SUCCESS,
  payload: account
});

export const fetchUserAccountFailure = message => ({
  type: USER_ACCOUNT_FAILURE,
  payload: message
});

export const logoutUserAccount = () => ({
  type: USER_ACCOUNT_LOGOUT
});

export const updateUserAccount = payload => ({
  type: USER_ACCOUNT_UPDATE,
  payload
});

export const updateUserAccountSuccess = (response, newData) => ({
  type: USER_ACCOUNT_UPDATE_SUCCESS,
  payload: { response, newData }
});

export const updateUserAccountFailure = message => ({
  type: USER_ACCOUNT_UPDATE_FAILURE,
  payload: message
});

export const fetchUserAccountRegister = payload => ({
  type: USER_ACCOUNT_REGISTER,
  payload
});


export const userAccountRegisterSuccess = (response, newData) => ({
  type: USER_ACCOUNT_REGISTER_SUCCESS,
  payload: { response, newData }
});

export const userAccountRegisterFailure = message => ({
  type: USER_ACCOUNT_REGISTER_FAILURE,
  payload: message
});

export const userAccountRegisterAddFields = payload => ({
  type: USER_ACCOUNT_REGISTER_ADD_FIELDS,
  payload
});
