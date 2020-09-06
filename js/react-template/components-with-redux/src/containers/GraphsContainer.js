import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTankDatas } from "../redux/modules/tankDatas";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { hexToRgb, INDIGO } from "../assets/jss";

function GraphsContainer() {
  const { loading, error, tankDatas: data } = useSelector(
    (state) => state.tankDatas
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTankDatas());
  }, [dispatch]);

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
          1
        </Grid>
      </Grid>
    </Paper>
  );
}

export default GraphsContainer;
