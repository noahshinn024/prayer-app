import * as actions from "../actions/types";

const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_JOURNALS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
