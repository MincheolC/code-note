import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AForm from "../components/Forms/AForm";
import BForm from "../components/Forms/BForm";
import CForm from "../components/Forms/CForm";

function FormsContainer() {
  return (
    <Paper elevation={3}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper elevation={3}>
            <AForm />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3}>
            <BForm />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3}>
            <CForm />
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default FormsContainer;
