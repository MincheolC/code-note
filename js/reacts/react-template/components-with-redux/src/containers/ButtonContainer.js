import React from "react";
import Grid from "@material-ui/core/Grid";
import ContainedButton from "../components/Buttons/ContainedButton";
import TextButton from "../components/Buttons/TextButton";
import OutlinedButton from "../components/Buttons/OutlinedButton";

function ButtonContainer() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <ContainedButton color="red" value="시작" size="large" />
        <ContainedButton color="indigo" value="시작" size="large" />
        <ContainedButton color="yellow" value="시작" size="large" />
        <ContainedButton color="orange" value="시작" size="large" />
        <ContainedButton color="gray" value="시작" size="large" />
        <ContainedButton color="green" value="시작" size="large" />
        <ContainedButton color="bOragne" value="시작" size="large" />
        <ContainedButton color="bPink" value="시작" size="large" />
        <ContainedButton color="bYellow" value="시작" size="large" />
        <ContainedButton color="bGreen" value="시작" size="large" />
      </Grid>
      <Grid item xs={12}>
        <TextButton color="red" value="시작" size="large" />
        <TextButton color="indigo" value="시작" size="large" />
        <TextButton color="yellow" value="시작" size="large" />
        <TextButton color="orange" value="시작" size="large" />
        <TextButton color="gray" value="시작" size="large" />
        <TextButton color="green" value="시작" size="large" />
        <TextButton color="bOragne" value="시작" size="large" />
        <TextButton color="bPink" value="시작" size="large" />
        <TextButton color="bYellow" value="시작" size="large" />
        <TextButton color="bGreen" value="시작" size="large" />
      </Grid>
      <Grid item xs={12}>
        <OutlinedButton color="red" value="시작" size="large" />
        <OutlinedButton color="indigo" value="시작" size="large" />
        <OutlinedButton color="yellow" value="시작" size="large" />
        <OutlinedButton color="orange" value="시작" size="large" />
        <OutlinedButton color="gray" value="시작" size="large" />
        <OutlinedButton color="green" value="시작" size="large" />
        <OutlinedButton color="bOragne" value="시작" size="large" />
        <OutlinedButton color="bPink" value="시작" size="large" />
        <OutlinedButton color="bYellow" value="시작" size="large" />
        <OutlinedButton color="bGreen" value="시작" size="large" />
      </Grid>
    </Grid>
  );
}

export default ButtonContainer;
