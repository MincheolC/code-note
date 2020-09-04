import React from "react";
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Card";
import CardIcon from "./CardIcon";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import styles from "../../assets/jss/components/cardsStyle";

const useStyles = makeStyles(styles);

function HCard() {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="orange" stats icon>
        <CardIcon color="orange">
          <Store />
        </CardIcon>
        <p className={classes.category}>Revenue</p>
        <h2 className={classes.title}>$34,245</h2>
      </CardHeader>
      <CardFooter stats>
        <div className={classes.stats}>
          <DateRange />
          Last 24 Hours
        </div>
      </CardFooter>
    </Card>
  );
}

export default HCard;
