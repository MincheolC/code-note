import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import EditableTableContainer from "../containers/EditableTableContainer";

function Navigation() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/editabletable">Editable Table</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/editabletable" component={EditableTableContainer}></Route>
      </Switch>
    </Router>
  );
}

export default Navigation;
