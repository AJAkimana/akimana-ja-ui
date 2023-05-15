import axios from "axios";

let token = "null";
if (localStorage.user) {
  const user = JSON.parse(localStorage.user);
  token = user.token;
}
export default axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
  withCredentials: true,
  headers: {
    authorization: token,
  },
});
