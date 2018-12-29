import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/main";
import Classify from "./pages/classify/main";
import Car from "./pages/car/main";
import User from "./pages/user/main";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/classify" component={Classify} />
      <Route path="/car" component={Car} />
      <Route path="/User" component={User} />
    </Switch>
  </BrowserRouter>
);
