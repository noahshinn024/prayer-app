import { FETCH_JOURNAL_DISPLAY_DATA } from "../actions/types";

const initialState = {
  header: "",
  body: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOURNAL_DISPLAY_DATA:
      return action.payload;
    default:
      return state;
  }
};
