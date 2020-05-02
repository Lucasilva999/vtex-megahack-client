import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Imports próprios
import Logon from "./pages/Login";
import Home from "./pages/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Logon} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
