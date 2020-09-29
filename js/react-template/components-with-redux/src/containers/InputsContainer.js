import React from "react";
import Grid from "@material-ui/core/Grid";
import ButtonContainer from "./ButtonContainer";
import SelectContainer from "./SelectContainer";

function InputsContainer() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <ButtonContainer />
      </Grid>
      <Grid item xs={12}>
        <SelectContainer />
      </Grid>
    </Grid>
  );
}

