import { Http } from "../../../services/Http";
import { catchError, map, mergeMap } from "rxjs/operators";
import { combineEpics, ofType } from "redux-observable";
import { of } from "rxjs";
import {
  EXPLORE_REVIEW,
  fetchExploreReviewSuccess,
  fetchExploreReviewFailure
} from "./actions";

export const fetchNationStatesEpic = action$ =>
  action$.pipe(
    ofType(EXPLORE_REVIEW),
    mergeMap(() =>
      Http.getNationStates().pipe(
        map(response => fetchExploreReviewSuccess("nation_states", response)),
        catchError(error => of(fetchExploreReviewFailure(error.message)))
      )
    )
  );

export const fetchMultinationalsEpic = action$ =>
  action$.pipe(
    ofType(EXPLORE_REVIEW),
    mergeMap(() =>
      Http.getMultinationals().pipe(
        map(response => fetchExploreReviewSuccess("multinationals", response)),
        catchError(error => of(fetchExploreReviewFailure(error.message)))
      )
    )
  );

export const fetchExploreReviewEpic = combineEpics(
  fetchNationStatesEpic,
  fetchMultinationalsEpic
);
