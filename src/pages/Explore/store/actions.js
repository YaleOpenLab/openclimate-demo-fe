
export const EXPLORE_REVIEW = "EXPLORE_REVIEW";
export const EXPLORE_REVIEW_SUCCESS = "EXPLORE_REVIEW_SUCCESS";
export const EXPLORE_REVIEW_FAILURE = "EXPLORE_REVIEW_FAILURE";

export const fetchExploreReview = payload => ({
	type: EXPLORE_REVIEW,
	payload
});

export const fetchExploreReviewSuccess = (type, data) => ({
	type: EXPLORE_REVIEW_SUCCESS,
	payload: type, data
});

export const fetchExploreReviewFailure = message => ({
	type: EXPLORE_REVIEW_FAILURE,
	payload: message
});

