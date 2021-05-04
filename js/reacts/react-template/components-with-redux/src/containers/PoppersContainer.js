import React from "react";
import Grid from "@material-ui/core/Grid";
import APopper from "../components/Poppers/APopper";
import BPopper from "../components/Poppers/BPopper";

function PoppersContainer() {
  const data = [
    {
      code: "PhHighLimitOver",
      content: {
        high: 3.5,
        low: 2.5,
        value: 3.6,
      },
      createdAt: 1599030299,
    },
    {
      code: "PhLowLimitOver",
      content: {
        high: 3.5,
        low: 2.5,
        value: 2.3,
      },
      createdAt: 1599840000,
    },
    {
      code: "TempHighLimitOver",
      content: {
        high: 31.5,
        low: 29.5,
        value: 32.6,
      },
      createdAt: 1599843600,
    },
  ];
  return (
    <Grid container spacing={3}>
      <Grid item container xs={4} justify="flex-end" alignItems="center">
        <APopper notificationRecords={data} />
      </Grid>
      <Grid item container xs={4} justify="flex-end" alignItems="center">
        <BPopper notificationRecords={data} />
      </Grid>
      <Grid item container xs={4} justify="flex-end" alignItems="center">
        <APopper notificationRecords={data} />
      </Grid>
    </Grid>
  );
}

export default PoppersContainer;
