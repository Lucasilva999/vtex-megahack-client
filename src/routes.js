import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Imports próprios
import Logon from "./pages/Login";
import Menu from "./pages/shared/menu";
import Marketplace from "./pages/MarketPlace";
import RegisterProduct from "./pages/register-product";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/loja" component={Marketplace} />
        <Route path="/login" component={Logon} />
        <Route path="/" exact component={Menu} />
        <Route path="/register-product" component={RegisterProduct} />
      </Switch>
    </BrowserRouter>
  );
}
