import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import BasicTableContainer from "../containers/BasicTableContainer";
import SortSelectTableContainer from "../containers/SortSelectTableContainer";
import EditableTableContainer from "../containers/EditableTableContainer";
import EditableTableRowContainer from "../containers/EditableTableRowContainer";
import ACardListContainer from "../containers/ACardListContainer";
import AGridListContainer from "../containers/AGridListContainer";
import CardsContainer from "../containers/CardsContainer";
import GraphsContainer from "../containers/GraphsContainer";
import PoppersContainer from "../containers/PoppersContainer";

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
        <li>
          <Link to="/a_cardlist">Card List Version A</Link>
        </li>
        <li>
          <Link to="/a_gridlist">Grid List Version A</Link>
        </li>
        <li>
          <Link to="/cards">Cards</Link>
        </li>
        <li>
          <Link to="/graphs">Graphs</Link>
        </li>
        <li>
          <Link to="/poppers">Poppers</Link>
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
        <Route path="/a_cardlist" component={ACardListContainer}></Route>
        <Route path="/a_gridlist" component={AGridListContainer}></Route>
        <Route path="/cards" component={CardsContainer}></Route>
        <Route path="/graphs" component={GraphsContainer}></Route>
        <Route path="/poppers" component={PoppersContainer}></Route>
      </Switch>
    </Router>
  );
}

export default Navigation;
