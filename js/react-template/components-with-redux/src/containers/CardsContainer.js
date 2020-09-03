import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BCard from "../components/BCard";
import { hexToRgb, INDIGO } from "../libs/styleUtils";

function CardsContainer() {
  return (
    <Paper
      style={{
        padding: 30,
        width: "60%",
        backgroundColor: `rgba(${hexToRgb(INDIGO[0])}, 0.5)`,
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <BCard />
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>2</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>3</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>4</Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CardsContainer;
