import { JOURNAL_DISPLAY_STATUS } from "./types";

export const setJournalDisplayStatus = (status) => (dispatch) => {
  dispatch({
    type: JOURNAL_DISPLAY_STATUS,
    payload: status,
  });
};
