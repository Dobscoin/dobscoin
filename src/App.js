import React from "react";
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Home from "./pages/home/Home";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
