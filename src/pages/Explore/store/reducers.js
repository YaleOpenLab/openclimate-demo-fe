import {
	EXPLORE_REVIEW,
	EXPLORE_REVIEW_FAILURE,
	EXPLORE_REVIEW_SUCCESS
} from "./actions";

const initialState = {
	insight: {

	},
	learn: {

	},
	review: {
		nation_states: {

		},
		multinationals: {

		},
		isLoading: false,
		error: null,
	}
};

const exploreReducer = (state = initialState, action) => {
	switch (action.type) {
		case EXPLORE_REVIEW:
			return {
				...state,
				isLoading: true,
				error: null
			};
		case EXPLORE_REVIEW_SUCCESS:
			console.log(action);
			return {
				...state,
				review: {nation_states: 'test'},
			};
		case EXPLORE_REVIEW_FAILURE:
			return {
				...state,
			};
		default:
			return state;
	}
};

export default exploreReducer;
