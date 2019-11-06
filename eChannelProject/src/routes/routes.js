import React from "react";
import store from "../store/store";
import { Provider } from "react-redux";
import { Redirect, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "../container/Dashboard";

export const routing = (
  <Provider store={store}>
    <Router>
      <Redirect exact from={"/"} to={"/dashboard"} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  </Provider>
);
