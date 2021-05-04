import React from "react";
import Grid from "@material-ui/core/Grid";
import BCard from "../components/Cards/BCard";
import CCard from "../components/Cards/CCard";
import DCard from "../components/Cards/DCard";
import ECard from "../components/Cards/ECard";
import FCard from "../components/Cards/FCard";
import GCard from "../components/Cards/GCard";
import HCard from "../components/Cards/HCard";
import ICard from "../components/Cards/ICard";

function CardsContainer() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <BCard />
      </Grid>
      <Grid item xs={3}>
        <CCard />
      </Grid>
      <Grid item xs={5}>
        <DCard isToday={true} />
      </Grid>
      <Grid item xs={4}>
        <ECard />
      </Grid>
      <Grid item xs={4}>
        <FCard />
      </Grid>
      <Grid item xs={4}>
        <GCard />
      </Grid>
      <Grid item xs={6}>
        <HCard />
      </Grid>
      <Grid item xs={3}>
        <ICard />
      </Grid>
    </Grid>
  );
}

export default CardsContainer;
