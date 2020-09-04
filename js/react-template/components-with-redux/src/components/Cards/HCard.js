import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Card";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";

const useStyles = makeStyles({
  title: {
    color: "#fff",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  category: {
    color: "rgba(255, 255, 255, 0.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
});

function HCard() {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="yellow">
        <h4 className={classes.title}>Employees Stats</h4>
        <p className={classes.category}>
          New employees on 15th September, 2016
        </p>
      </CardHeader>
      <CardBody>This is Body</CardBody>
      <CardFooter>Last 24 Hours</CardFooter>
    </Card>
  );
}

export default HCard;
