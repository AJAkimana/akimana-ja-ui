import { Redirect } from "react-router-dom";
import HomePage from "./views/homepage";

export const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    component: () => <Redirect to="/" />,
  },
];
