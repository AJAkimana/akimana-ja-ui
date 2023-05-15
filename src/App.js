import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { ToastContainer } from "react-toastify";
import { renderRoutes } from "react-router-config";
import { store } from "./redux/store";
import { routes } from "./routes";
import { mainTheme } from "./helpers";

export const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <ThemeProvider theme={mainTheme}>
        <Router>{renderRoutes(routes)}</Router>
      </ThemeProvider>
    </Provider>
  );
};
