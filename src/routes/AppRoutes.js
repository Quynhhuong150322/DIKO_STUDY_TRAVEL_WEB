import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../pages/home/Home";
// import Home from "../pages/home/Home"
const AppRoutes = () => {
  return (
    <div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="*">
          <div className="">404 not Error...</div>
        </Route>
      </Switch>
    </div>
  );
};

export default AppRoutes;
