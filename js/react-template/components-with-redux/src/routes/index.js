import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import BasicTableContainer from "../containers/BasicTableContainer";
import SortSelectTableContainer from "../containers/SortSelectTableContainer";
import EditableTableContainer from "../containers/EditableTableContainer";
import EditableTableRowContainer from "../containers/EditableTableRowContainer";
import ACardListContainer from "../containers/ACardListContainer";
import AGridListContainer from "../containers/AGridListContainer";
import CardsContainer from "../containers/CardsContainer";
import GraphsContainer from "../containers/GraphsContainer";
import PoppersContainer from "../containers/PoppersContainer";
import FormsContainer from "../containers/FormsContainer";
import CountDownContainer from "../containers/CountDownContainer";
import ButtonContainer from "../containers/ButtonContainer";
import GridBPContainer from "../containers/GridBPContainer";
import TablesContainer from "../containers/TablesContainer";
import SkeletonContainer from "../containers/SkeletonContainer";

export const Links = () => (
  <>
    <List>
      <ListItem button component={Link} to="/basictable" key={"BasicTable"}>
        <ListItemText primary="Basic Table" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/sortselecttable"
        key={"SortSelectTable"}
      >
        <ListItemText primary="Sort & Select Table" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/editabletable"
        key={"EditableTable"}
      >
        <ListItemText primary="Editable Table" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/editabletablerow"
        key={"EditableTableRow"}
      >
        <ListItemText primary="Editable Table Row" />
      </ListItem>
      <ListItem button component={Link} to="/tables" key={"Tables"}>
        <ListItemText primary="Tables" />
      </ListItem>
      <ListItem button component={Link} to="/a_cardlist" key={"CardListA"}>
        <ListItemText primary="Card List Version A" />
      </ListItem>
      <ListItem button component={Link} to="/a_gridlist" key={"GridListA"}>
        <ListItemText primary="Grid List Version A" />
      </ListItem>
      <ListItem button component={Link} to="/cards" key={"Cards"}>
        <ListItemText primary="Cards" />
      </ListItem>
      <ListItem button component={Link} to="/graphs" key={"Graphs"}>
        <ListItemText primary="Graphs" />
      </ListItem>
      <ListItem button component={Link} to="/poppers" key={"Poppers"}>
        <ListItemText primary="Poppers" />
      </ListItem>
      <ListItem button component={Link} to="/forms" key={"Forms"}>
        <ListItemText primary="Forms" />
      </ListItem>
      <ListItem button component={Link} to="/count_down" key={"CountDowns"}>
        <ListItemText primary="CountDowns" />
      </ListItem>
      <ListItem button component={Link} to="/buttons" key={"Buttons"}>
        <ListItemText primary="Buttons" />
      </ListItem>
      <ListItem button component={Link} to="/grid_breakpoint" key={"GridBP"}>
        <ListItemText primary="Grid BP" />
      </ListItem>
      <ListItem button component={Link} to="/skeleton" key={"Skeleton"}>
        <ListItemText primary="Skeleton" />
      </ListItem>
    </List>
  </>
);

export const Routes = () => (
  <Switch>
    <Route path="/basictable" component={BasicTableContainer}></Route>
    <Route path="/editabletable" component={EditableTableContainer}></Route>
    <Route
      path="/editabletablerow"
      component={EditableTableRowContainer}
    ></Route>
    <Route path="/sortselecttable" component={SortSelectTableContainer}></Route>
    <Route path="/tables" component={TablesContainer}></Route>
    <Route path="/a_cardlist" component={ACardListContainer}></Route>
    <Route path="/a_gridlist" component={AGridListContainer}></Route>
    <Route path="/cards" component={CardsContainer}></Route>
    <Route path="/graphs" component={GraphsContainer}></Route>
    <Route path="/poppers" component={PoppersContainer}></Route>
    <Route path="/forms" component={FormsContainer}></Route>
    <Route path="/count_down" component={CountDownContainer}></Route>
    <Route path="/buttons" component={ButtonContainer}></Route>
    <Route path="/grid_breakpoint" component={GridBPContainer}></Route>
    <Route path="/skeleton" component={SkeletonContainer}></Route>
  </Switch>
);
