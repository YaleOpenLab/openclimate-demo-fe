import { combineEpics } from "redux-observable";
import { fetchUserAccountEpic } from "../../components/Auth/store/epics";
import {fetchExploreReviewEpic} from "../../pages/Explore/store/epics";

export const rootEpic = combineEpics(fetchUserAccountEpic, fetchExploreReviewEpic);
