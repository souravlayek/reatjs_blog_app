import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./screens/HomePage/HomePage";
import SearchScreen from "./screens/searchScreen/SearchScreen";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/s">
        <SearchScreen />
      </Route>
      <Route exact path="/home">
        <Redirect to="/" />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};

export default Routes;
