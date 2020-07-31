import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Loja from "./pages/Loja";
import Produtos from "./pages/Produtos";
import Login from "./pages/Login";
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Produtos}  />
          <Route path="/loja"   component={Loja}      />
          <Route path="/inicio" component={Inicio}    />
          <Route path="/login"  component={Login}     />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
