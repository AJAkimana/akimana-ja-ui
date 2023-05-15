import { combineReducers } from "redux";
import { CONTACT_ME } from "../actions";
import { reducer } from "../utils/reducer";

export default combineReducers({
  contactMe: reducer(CONTACT_ME, "message", "string"),
});
