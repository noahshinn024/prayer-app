import { combineReducers } from "redux";
import journalReducer from "./journalReducer";
import journalDisplayReducer from "./journalDisplayReducer";
import journalDisplayStatusReducer from "./journalDisplayStatusReducer";

export default combineReducers({
  journals: journalReducer,
  journalDisplayData: journalDisplayReducer,
  journalDisplayStatus: journalDisplayStatusReducer,
});
