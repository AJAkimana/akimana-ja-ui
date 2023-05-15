import { store } from "../store";
import { http } from "../utils/http";
import { CONTACT_ME } from "./actionTypes";

export const sendMessage = (messageBody) => {
  store.dispatch({
    type: CONTACT_ME,
    payload: http.post("/contact-me", messageBody),
  });
};
