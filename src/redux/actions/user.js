import { store } from "../store";
import { http } from "../utils/http";
import { CONTACT_ME, GET_MY_INFO } from "./actionTypes";

export const sendMessage = (messageBody) => {
  store.dispatch({
    type: CONTACT_ME,
    payload: http.post("/contact-me", messageBody),
  });
};

export const getMyInfo = () => {
  store.dispatch({
    type: GET_MY_INFO,
    payload: http.get("/get-my-info"),
  });
};
