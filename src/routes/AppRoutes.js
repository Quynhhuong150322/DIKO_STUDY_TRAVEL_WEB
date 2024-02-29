import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Error from "../components/Error";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
function AppRoutes() {
  return (
    <div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/AboutUs" exact>
          <AboutUs />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default AppRoutes;
