import { combineReducers } from "redux";
import userAccountReducer from "../../components/Auth/store/reducers";
import exploreReducer from "../../pages/Explore/store/reducers";

const rootReducer = combineReducers({
  profile: combineReducers({
    account: userAccountReducer,
  }),
	explore: exploreReducer,
});

export default rootReducer;
