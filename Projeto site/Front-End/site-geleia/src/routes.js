import React  from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Loja from "./pages/Loja";
import Produtos from "./pages/Produtos";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/loja" component={Loja} />
          <Route path="/produtos" component={Produtos} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
