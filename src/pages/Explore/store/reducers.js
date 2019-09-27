import {
  EXPLORE_REVIEW,
  EXPLORE_REVIEW_FAILURE,
  EXPLORE_REVIEW_SUCCESS,
  EXPLORE_REVIEW_DATA,
  EXPLORE_REVIEW_DATA_FAILURE,
  EXPLORE_REVIEW_DATA_SUCCESS
} from "./actions";

const initialState = {
  review: {
    nation_states: [],
    multinationals: [],
    selected: {
      item: {},
      isLoading: false,
      error: null,
    },
    isLoading: false,
    error: null
  }
};

const exploreReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXPLORE_REVIEW:
      return {
        ...state,
        review: {
          ...state.review,
          isLoading: true,
          error: null
        }
      };
    case EXPLORE_REVIEW_SUCCESS:
      let newData = { ...state.review };
      newData[action.name] = action.data.data;
      newData.isLoading = false;
      return {
        ...state,
        review: newData
      };
    case EXPLORE_REVIEW_FAILURE:
      return {
        ...state,
        review: {
          ...state.review,
          error: action.payload,
          isLoading: false
        }
      };
    case EXPLORE_REVIEW_DATA:
      return {
        ...state,
        review: {
          ...state.review,
          selected: {
            ...state.review.selected,
            isLoading: true,
          }
        }
      };
    case EXPLORE_REVIEW_DATA_SUCCESS:
      let updateData = { ...state.review };
      updateData.selected.item = action.data.data;
      updateData.selected.isLoading = false;
      updateData.selected.error = null;
      return {
        ...state,
        review: updateData
      };
    case EXPLORE_REVIEW_DATA_FAILURE:
      let errorData = { ...state.review };
      errorData.selected.item = {};
      errorData.selected.isLoading = false;
      errorData.selected.error = action.payload;

      return {
        ...state,
        review: errorData,
      };

    default:
      return state;
  }
};

export default exploreReducer;
