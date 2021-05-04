import React from "react";
import classNames from "classnames";
import { format } from "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AccessAlarms from "@material-ui/icons/AccessAlarms";
import DateRange from "@material-ui/icons/DateRange";
import Card from "../Cards/Card";
import CardIcon from "../Cards/CardIcon";
import CardHeader from "../Cards/CardHeader";
import CardFooter from "../Cards/CardFooter";
import styles from "../../assets/jss/components/countDownStyle";

const useStyles = makeStyles(styles);

function CountDown(props) {
  const { startedAt, day, hour, minute, second, tank, tea } = props;
  const classes = useStyles();

  return (
    <Card>
      <CardHeader color="orange" stats icon>
        <CardIcon color="orange">
          <AccessAlarms />
        </CardIcon>
        <p className={classes.category}>{`${tank} (${tea})`}</p>
        <div className={classes.container}>
          <div className={classNames(classes.count, classes.day)}>
            {/* <Typography variant="h4" component="p"> */}
            <Typography className={classes.number} component="span">
              {day}
            </Typography>
            <Typography component="span">일</Typography>
          </div>
          <div className={classNames(classes.count, classes.hour)}>
            <Typography className={classes.number} component="span">
              {hour}
            </Typography>
            <Typography component="span">시</Typography>
          </div>
          <div className={classNames(classes.count, classes.minute)}>
            <Typography className={classes.number} component="span">
              {minute}
            </Typography>
            <Typography component="span">분</Typography>
          </div>
          <div className={classNames(classes.count, classes.second)}>
            <Typography className={classes.number} component="span">
              {second}
            </Typography>
            <Typography component="span">초</Typography>
          </div>
        </div>
      </CardHeader>
      <CardFooter stats>
        <div className={classes.stats}>
          <DateRange />
          {`${format(startedAt, "yyyy-MM-dd HH:mm")} 시작`}
        </div>
      </CardFooter>
    </Card>
  );
}

export default CountDown;
