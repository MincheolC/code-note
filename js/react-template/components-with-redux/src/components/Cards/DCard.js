import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import WarningIcon from "@material-ui/icons/Warning";

import { INDIGO, GRAY, WHITE, RED } from "../../libs/styleUtils";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    position: "relative",
  },
  title: {
    color: INDIGO[8],
    fontWeight: "Bold",
    fontSize: 16,
  },
  content: {
    paddingLeft: 5,
    color: GRAY[7],
    fontSize: 14,
  },
  time: {
    display: "inline-block",
    color: GRAY[5],
    fontSize: 14,
  },
  warn: {
    width: 30,
    height: 30,
    color: RED[7],
    backgroundColor: WHITE,
  },
  timer: {
    display: "inline-block",
    width: 20,
    height: 20,
    color: GRAY[5],
  },
}));

function DCard({ isToday }) {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={2}>
      <Grid container alignItems="center">
        <Grid item xs>
          <Avatar className={classes.warn}>
            <WarningIcon />
          </Avatar>
        </Grid>
        <Grid item xs>
          <Typography className={classes.title}>PH 초과</Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography className={classes.content}>
            측정값: <b>3.5</b> (2.5 ~ 3.4)
          </Typography>
        </Grid>
        <Grid item xs>
          {isToday ? (
            <Typography className={classes.time}>09:21 AM</Typography>
          ) : (
            <Typography className={classes.time}>09/03/2020</Typography>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default DCard;
