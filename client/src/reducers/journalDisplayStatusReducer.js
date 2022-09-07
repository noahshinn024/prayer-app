import { JOURNAL_DISPLAY_STATUS } from "../actions/types";

const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case JOURNAL_DISPLAY_STATUS:
      return action.payload;
    default:
      return state;
  }
};
