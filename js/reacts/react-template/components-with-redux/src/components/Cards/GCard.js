import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import WarningIcon from "@material-ui/icons/Warning";

import { RED, WHITE } from "../../libs/styleUtils";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    position: "relative",
    background: `linear-gradient(60deg, ${RED[6]}, ${RED[8]})`,
  },
  title: {
    textAlign: "center",
    color: WHITE,
    fontWeight: "Bold",
    fontSize: 16,
  },
  content: {
    paddingLeft: 5,
    color: WHITE,
    fontSize: 14,
  },
  time: {
    display: "inline-block",
    color: WHITE,
    fontSize: 14,
  },
  warn: {
    margin: "auto",
    width: 30,
    height: 30,
    color: WHITE,
  },
}));

function GCard({ isToday }) {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={3}>
      <Grid container alignItems="center">
        <Grid item xs={1}>
          <WarningIcon className={classes.warn} />
        </Grid>
        <Grid item xs>
          <Typography className={classes.title}>PH 미달</Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography className={classes.content}>
            측정값: <b>2.1</b> ( -0.4 )
          </Typography>
          <Typography className={classes.content}>
            최적 범위: 2.5 ~ 3.4
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

export default GCard;
