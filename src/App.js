import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CheckLink from "./Component/CheckLink";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:urlLink">
          <CheckLink />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
