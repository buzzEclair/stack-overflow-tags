import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import "./styles.css";
import "./Styles.scss";

export default function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </HashRouter>
    </div>
  );
}
