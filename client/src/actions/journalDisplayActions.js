import { FETCH_JOURNAL_DISPLAY_DATA } from "./types";

export const setJournalDisplayData = (data) => (dispatch) => {
  dispatch({
    type: FETCH_JOURNAL_DISPLAY_DATA,
    payload: data,
  });
};
