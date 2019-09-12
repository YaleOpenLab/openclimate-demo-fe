import {Http} from "../../../services/Http";
import {catchError, switchMap, map} from "rxjs/operators";
import {ofType} from "redux-observable";
import {Observable, of, merge} from "rxjs";
import {
	EXPLORE_REVIEW,
	fetchExploreReviewSuccess,
	fetchExploreReviewFailure
} from "./actions";

export const fetchExploreReviewEpic = action$ =>
	action$.pipe(
		ofType(EXPLORE_REVIEW),
		merge(
			Http.getNationStates().pipe(
				map(data => {
					return fetchExploreReviewSuccess('nation_states', data)
				}),
				catchError(error => {
					return of(fetchExploreReviewFailure(error.message))
				})
			),
			Http.getMultinationals().pipe(
				map(data => {
					return fetchExploreReviewSuccess('multinationals', data)
				}),
				catchError(error => {
					return of(fetchExploreReviewFailure(error.message))
				})
			),
		)
	);
