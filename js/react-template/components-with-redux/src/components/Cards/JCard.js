import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccessTime from "@material-ui/icons/AccessTime";
import Card from "./Card";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import AStyledLineChart from "../Graphs/AStyledLineChart";
import styles from "../../assets/jss/components/cardsStyle";

const useStyles = makeStyles(styles);

function JCard(props) {
  const { color, data, type, title, content, unit } = props;
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color={color}>
        <AStyledLineChart data={data} type={type} unit={unit} />
      </CardHeader>
      <CardBody>
        <h1 className={classes.title}>{title}</h1>
        <p className={classes.category}>{content}</p>
      </CardBody>
      <CardFooter chart>
        <div className={classes.stats}>
          <AccessTime />
          Last 24 Hours
        </div>
      </CardFooter>
    </Card>
  );
}

export default JCard;
