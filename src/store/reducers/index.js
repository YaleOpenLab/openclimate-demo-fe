import { combineReducers } from "redux";
import profileReducers from "../../components/Auth/store/reducers";
import exploreReducer from "../../pages/Explore/store/reducers";

const rootReducer = combineReducers({
  profile: profileReducers,
  explore: exploreReducer
});

export default rootReducer;
