import { combineReducers } from "redux";
import userAccountReducer from "../../components/Auth/store/reducers";

const rootReducer = combineReducers({
    profile: combineReducers({
        account: userAccountReducer
    })
});

export default rootReducer;
