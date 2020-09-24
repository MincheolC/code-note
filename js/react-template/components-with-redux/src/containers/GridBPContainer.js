import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function GridBPContainer() {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.title}>
        {"xs(~ 600px) sm(~ 950px) md(~ 1200px) lg(~ 1920px) xl(1920px ~)"}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={4}>
          <Paper className={classes.paper}>xs=12 lg=4</Paper>
        </Grid>
        <Grid item xs={12} sm={6} xl={4}>
          <Paper className={classes.paper}>xs=12 sm=6 lg=4</Paper>
        </Grid>
        <Grid item xs={12} sm={6} xl={4}>
          <Paper className={classes.paper}>xs=12 sm=6 lg=4</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default GridBPContainer;
