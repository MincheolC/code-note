import React from "react";
import classNames from "classnames";
import { format } from "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "'Jua', sans-serif",
  },
  container: {
    display: "flex",
    margin: 10,
  },
  count: {
    margin: "0 2rem",
    textAlign: "center",
    "& p": {
      fontWeight: "bold",
    },
    "& span": {
      fontSize: "1rem",
    },
  },
  day: {},
});

function CountDown(props) {
  const { startedAt, day, hour, minute, second } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography classNames={classes.title} variant="h2">
        발효 시간
      </Typography>
      <Typography variant="p">{`시작: ${format(
        startedAt,
        "yyyy-MM-dd HH:mm"
      )}`}</Typography>
      <div className={classes.container}>
        <div className={classNames(classes.count, classes.day)}>
          <Typography variant="h4" component="p">
            {day}
          </Typography>
          <Typography component="span">일</Typography>
        </div>
        <div className={classNames(classes.count, classes.hour)}>
          <Typography variant="h4" component="p">
            {hour}
          </Typography>
          <Typography component="span">시</Typography>
        </div>
        <div className={classNames(classes.count, classes.minute)}>
          <Typography variant="h4" component="p">
            {minute}
          </Typography>
          <Typography component="span">분</Typography>
        </div>
        <div className={classNames(classes.count, classes.second)}>
          <Typography variant="h4" component="p">
            {second}
          </Typography>
          <Typography component="span">초</Typography>
        </div>
      </div>
    </div>
  );
}

export default CountDown;
