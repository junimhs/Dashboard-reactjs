import React from "react";
import { Switch, Route } from "react-router-dom";

// Importando pages
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}