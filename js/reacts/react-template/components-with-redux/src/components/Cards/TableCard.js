import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Card";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import styles from "../../assets/jss/components/tableCardStyle";

const useStyles = makeStyles(styles);

function TableCard(props) {
  const classes = useStyles();
  const { title, category, children } = props;
  return (
    <Card>
      <CardHeader color="bPink">
        <p className={classes.category}>{category}</p>
        <h2 className={classes.title}>{title}</h2>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
}

export default TableCard;
