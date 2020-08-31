import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import BasicTableContainer from "../containers/BasicTableContainer";

function Navigation() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/basictable">Basic Table</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/basictable" component={BasicTableContainer}></Route>
      </Switch>
    </Router>
  );
}

export default Navigation;
