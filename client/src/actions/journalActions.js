import * as actions from "./types";

const axios = require("axios");

export const fetchJournals = () => (dispatch) => {
  axios
    .get("/api/journals")
    .then((response) => {
      dispatch({
        type: actions.FETCH_JOURNALS,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
