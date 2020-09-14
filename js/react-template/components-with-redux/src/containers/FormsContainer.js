import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AForm from "../components/Forms/AForm";

function FormsContainer() {
  return (
    <Paper elevation={3}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper elevation={3}>
            <AForm />
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default FormsContainer;
