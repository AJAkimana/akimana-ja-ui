import { combineReducers } from "redux";
import { myInfoInit } from "../../helpers/initialStates";
import { CONTACT_ME, GET_MY_INFO } from "../actions";
import { reducer } from "../utils/reducer";

export default combineReducers({
  contactMe: reducer(CONTACT_ME, "message", "string"),
  getMyInfo: reducer(GET_MY_INFO, "info", "object", myInfoInit),
});
