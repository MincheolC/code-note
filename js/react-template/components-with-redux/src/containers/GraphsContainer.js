import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import RealtimeGraphContainer from "./RealtimeGraphContainer";
import ICard from "../components/Cards/ICard";

function GraphsContainer() {
  return (
    <Paper style={{ padding: 30, background: "#eeeeee" }}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <ICard />
        </Grid>
        <Grid item xs={3}>
          <ICard />
        </Grid>
        <Grid item xs={3}>
          <ICard />
        </Grid>
        <Grid item xs={3}>
          <ICard />
        </Grid>
        <Grid item xs={12}>
          <RealtimeGraphContainer />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default GraphsContainer;
