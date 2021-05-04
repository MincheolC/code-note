import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import { INDIGO, GRAY, WHITE } from "../../libs/styleUtils";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    position: "relative",
  },
  title: {
    color: GRAY[5],
    fontWeight: "Bold",
    fontSize: 13,
  },
  subTitle: {
    color: GRAY[7],
    fontSize: 18,
  },
  time: {
    color: GRAY[5],
    fontSize: 14,
  },
  avatar: {
    width: 30,
    height: 30,
    color: INDIGO[4],
    backgroundColor: WHITE,
  },
}));

function CCard() {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={2}>
      <Grid container alignItems="center">
        <Grid item xs={2}>
          <Avatar className={classes.avatar}>
            <AttachMoneyIcon />
          </Avatar>
        </Grid>
        <Grid item container xs={10}>
          <Grid item xs={12}>
            <Typography className={classes.title} gutterBottom>
              Money transaction
            </Typography>
          </Grid>
          <Grid item xs={12} container alignItems="center">
            <Grid item xs container direction="column">
              <Typography className={classes.subTitle}>Todd Harris</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.time}>10/11/2018</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CCard;
