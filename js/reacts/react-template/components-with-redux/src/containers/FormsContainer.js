import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AForm from "../components/Forms/AForm";
import BForm from "../components/Forms/BForm";
import CForm from "../components/Forms/CForm";

const useStyles = makeStyles({
  root: {
    padding: 10,
  },
});

function FormsContainer() {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Paper className={classes.root} elevation={3}>
          <AForm />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.root} elevation={3}>
          <BForm />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.root} elevation={3}>
          <CForm />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default FormsContainer;
