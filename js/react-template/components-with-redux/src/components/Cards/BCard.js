import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import RoomIcon from "@material-ui/icons/Room";

import { INDIGO, GRAY } from "../../libs/styleUtils";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    position: "relative",
  },
  title: {
    color: INDIGO[7],
    fontWeight: "Bold",
    fontSize: 16,
  },
  subTitle: {
    color: INDIGO[4],
    fontSize: 13,
  },
  time: {
    color: GRAY[5],
    fontSize: 14,
  },
  divider: {
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(2),
    background: `linear-gradient(to right, #fff, ${INDIGO[3]})`,
  },
  avatar: {
    position: "absolute",
    top: 0,
    transform: "translate(-10%, -50%)",
    width: 35,
    height: 35,
    backgroundColor: INDIGO[4],
  },
  text1: {
    color: GRAY[6],
    fontSize: 14,
  },
}));

function BCard() {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={2}>
      <Avatar className={classes.avatar}>
        <RoomIcon />
      </Avatar>
      <Grid container>
        <Grid item xs={1} />
        <Grid item container xs={11} alignItems="flex-start">
          <Grid item xs container direction="column">
            <Typography className={classes.title}>
              Stuttgart, Airport
            </Typography>
            <Typography className={classes.subTitle}>
              Location in city center
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.time}>10/11/2018</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Divider classes={{ root: classes.divider }} component="hr" />
      <Grid container>
        <Grid item xs={1}>
          <FlightTakeoffIcon style={{ color: GRAY[5] }} />
        </Grid>
        <Grid item container xs={11}>
          <Grid item xs container alignItems="center">
            <Typography className={classes.text1} component="span">
              Stuttgart, Germany
            </Typography>
            <ArrowRightAltIcon
              style={{ color: GRAY[5], marginLeft: 2, marginRight: 2 }}
            />
            <Typography className={classes.text1}>Seoul, Korea</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.time}>09:00 AM</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default BCard;
