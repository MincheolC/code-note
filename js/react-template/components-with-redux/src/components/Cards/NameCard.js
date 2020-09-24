import React from "react";
import Info from "@material-ui/icons/Info";
import DateRange from "@material-ui/icons/DateRange";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Card";
import CardIcon from "./CardIcon";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import styles from "../../assets/jss/components/cardsStyle";

const useStyles = makeStyles(styles);

function NameCard(props) {
  const classes = useStyles();
  const { tank, tea } = props;
  return (
    <Card>
      <CardHeader color="yellow" stats icon>
        <CardIcon color="yellow">
          <Info />
        </CardIcon>
        <p className={classes.category}>{tank}</p>
        <h2 className={classes.title}>{tea}</h2>
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

export default NameCard;
