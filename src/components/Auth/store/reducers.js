import {
  USER_ACCOUNT,
  USER_ACCOUNT_SUCCESS,
  USER_ACCOUNT_FAILURE,
  USER_ACCOUNT_UPDATE,
  USER_ACCOUNT_UPDATE_SUCCESS,
  USER_ACCOUNT_UPDATE_FAILURE,
  USER_ACCOUNT_LOGOUT,
  USER_ACCOUNT_REGISTER,
  USER_ACCOUNT_REGISTER_SUCCESS,
  USER_ACCOUNT_REGISTER_FAILURE,
  USER_ACCOUNT_REGISTER_ADD_FIELDS
} from "./actions";
import Storage from "../../../services/Storage";
import { combineReducers } from "redux";

const initialState = {
  items: {
    Token: Storage.get("token")
  },
  isLoading: false,
  error: null,
  authorized: !!Storage.get("token")
};

const userAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACCOUNT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case USER_ACCOUNT_SUCCESS:
      return {
        items: action.payload,
        isLoading: false,
        error: null,
        authorized: true
      };
    case USER_ACCOUNT_FAILURE:
      return {
        ...state,
        items: { Token: null },
        isLoading: false,
        error: action.payload,
        authorized: false
      };
    case USER_ACCOUNT_LOGOUT:
      return {
        items: [],
        isLoading: false,
        error: null,
        authorized: false
      };
    case USER_ACCOUNT_UPDATE:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case USER_ACCOUNT_UPDATE_SUCCESS:
      let newData = action.payload.newData;
      let items = { ...state.items };

      return {
        items: items,
        updateStatus: action.payload.response,
        isLoading: false,
        error: null
      };
    case USER_ACCOUNT_UPDATE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

const initialRegisterState = {
  fields: [],
  isLoading: false,
  error: null,
};


const userRegisterReducer = (state = initialRegisterState, action) => {
  switch (action.type) {
    case USER_ACCOUNT_REGISTER:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case USER_ACCOUNT_REGISTER_SUCCESS:
      return {
        items: action.payload,
        isLoading: false,
        error: null,
        authorized: true
      };
    case USER_ACCOUNT_REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        authorized: false
      };
    case USER_ACCOUNT_REGISTER_ADD_FIELDS:
      const newField = {...state.fields, ...action.payload}
      return {
        fields: newField,
        isLoading: false,
        error: null,
        authorized: false
      };
    default:
      return state;
  }
};

const profileReducers = combineReducers({
  account: userAccountReducer,
  register: userRegisterReducer,
});



export default profileReducers;
