import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from './History'

import Home from './pages/Home'


const Rotas = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Rotas;
