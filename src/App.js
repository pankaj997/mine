import React from "react";
import "./styles.css";
import Update from "./Update.js";
import Login from "./Login.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
    <Router>
        <div>
       <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Update"  exact component={Update} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
