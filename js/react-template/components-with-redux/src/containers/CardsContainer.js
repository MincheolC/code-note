import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BCard from "../components/Cards/BCard";
import CCard from "../components/Cards/CCard";
import DCard from "../components/Cards/DCard";
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
        <Grid item xs={4}>
          <CCard />
        </Grid>
        <Grid item xs={8}>
          <DCard isToday={true} />
        </Grid>
        <Grid item xs={6}>
          <DCard />
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>4</Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CardsContainer;
