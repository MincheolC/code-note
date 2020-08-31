import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import BasicTableContainer from "../containers/BasicTableContainer";
import SortSelectTableContainer from "../containers/SortSelectTableContainer";

function Navigation() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/basictable">Basic Table</Link>
        </li>
        <li>
          <Link to="/sortselecttable">Sort & Select Table</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/basictable" component={BasicTableContainer}></Route>
        <Route
          path="/sortselecttable"
          component={SortSelectTableContainer}
        ></Route>
      </Switch>
    </Router>
  );
}

export default Navigation;
