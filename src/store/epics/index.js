import { combineEpics } from "redux-observable";
import { fetchUserAccountEpic } from "../../components/Auth/store/epics";

export const rootEpic = combineEpics(fetchUserAccountEpic);
