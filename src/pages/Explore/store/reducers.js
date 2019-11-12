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
      const raw = action.data.data;
      const augmented = (raw || []).map(state => state.Index === 63 ? {
        ...state,
        subnationals: [
          { Index: 1001, name: 'Arizona' },
          { Index: 1002, name: 'California' },
          { Index: 1003, name: 'Colorado' },
          { Index: 1004, name: 'Connecticut' },
          { Index: 1005, name: 'Illinois' },
          { Index: 1006, name: 'Iowa' },
          { Index: 1007, name: 'Kansas' },
          { Index: 1008, name: 'Maine' },
          { Index: 1009, name: 'New York' },
          { Index: 1010, name: 'North Carolina' },
          { Index: 1011, name: 'Ohio' },
          { Index: 1012, name: 'Oklahoma' },
        ],
        organizations: [
          { Index: 2001, name: 'Amazon' },
          { Index: 2002, name: 'Apple' },
          { Index: 2003, name: 'Facebook' },
          { Index: 2004, name: 'Google' },
          { Index: 2005, name: 'Microsoft' },
        ],
      } : state);
      newData[action.name] = augmented;
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
