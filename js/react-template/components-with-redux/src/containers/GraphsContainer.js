import React from "react";
import Grid from "@material-ui/core/Grid";
import RealtimeGraphContainer from "./RealtimeGraphContainer";
import ICard from "../components/Cards/ICard";

function GraphsContainer() {
  return (
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
  );
}

export default GraphsContainer;
