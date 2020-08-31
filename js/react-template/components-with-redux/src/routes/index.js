import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import BasicTableContainer from "../containers/BasicTableContainer";
import SortSelectTableContainer from "../containers/SortSelectTableContainer";
import EditableTableContainer from "../containers/EditableTableContainer";
import EditableTableRowContainer from "../containers/EditableTableRowContainer";

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
        <li>
          <Link to="/editabletable">Editable Table</Link>
        </li>
        <li>
          <Link to="/editabletablerow">Editable Table Row</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/basictable" component={BasicTableContainer}></Route>
        <Route path="/editabletable" component={EditableTableContainer}></Route>
        <Route
          path="/editabletablerow"
          component={EditableTableRowContainer}
        ></Route>
        <Route
          path="/sortselecttable"
          component={SortSelectTableContainer}
        ></Route>
      </Switch>
    </Router>
  );
}

export default Navigation;
