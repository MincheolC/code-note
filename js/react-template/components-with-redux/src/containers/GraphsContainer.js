import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTankDatas } from "../redux/modules/tankDatas";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { INDIGO, WHITE, RED, ORANGE, GRAY } from "../assets/jss";
import RealtimeGraphContainer from "./RealtimeGraphContainer";
import AGraph from "../components/Graphs/AGraph";
import BGraph from "../components/Graphs/BGraph";
import AStyledChart from "../components/Graphs/AStyledChart";
import moment from "moment";

function createData(tankDatas, key) {
  return tankDatas
    .map((tankData) => ({
      x: moment(tankData.createdAt * 1000),
      y: tankData[key],
    }))
    .slice(0, 15);
}

const graphData = {
  datasets: [
    {
      label: "온도",
      fill: false,

      backgroundColor: INDIGO[7],
      borderColor: INDIGO[7], // line

      pointBackgroundColor: INDIGO[7],
      pointBorderWidth: 1,
      pointRadius: 2,

      pointHoverRadius: 3,
      pointHoverBackgroundColor: WHITE,
      pointHoverBorderColor: INDIGO[7],
      pointHoverBorderWidth: 1,
    },
    {
      label: "PH",
      fill: false,

      backgroundColor: RED[7],
      borderColor: RED[7], // line

      pointBackgroundColor: RED[7],
      pointBorderWidth: 1,
      pointRadius: 2,

      pointHoverRadius: 3,
      pointHoverBackgroundColor: WHITE,
      pointHoverBorderColor: RED[7],
      pointHoverBorderWidth: 1,
    },
    {
      label: "당도",
      fill: false,

      backgroundColor: ORANGE[7],
      borderColor: ORANGE[7], // line

      pointBackgroundColor: ORANGE[7],
      pointBorderWidth: 1,
      pointRadius: 2,

      pointHoverRadius: 3,
      pointHoverBackgroundColor: WHITE,
      pointHoverBorderColor: ORANGE[7],
      pointHoverBorderWidth: 1,
    },
    {
      label: "용존산소량",
      fill: false,

      backgroundColor: GRAY[7],
      borderColor: GRAY[7], // line

      pointBackgroundColor: GRAY[7],
      pointBorderWidth: 1,
      pointRadius: 2,

      pointHoverRadius: 3,
      pointHoverBackgroundColor: WHITE,
      pointHoverBorderColor: GRAY[7],
      pointHoverBorderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    maintainAspectRatio: false,
    xAxes: [
      {
        type: "time",
        time: {
          unit: "minute",
          displayFormats: {
            second: "HH:mm:ss",
            minute: "HH:mm",
            day: "MM D HH:mm",
          },
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          min: 0,
          max: 100,
          stepSize: 10,
        },
      },
    ],
  },
};

function GraphsContainer() {
  const { loading, error, tankDatas: data } = useSelector(
    (state) => state.tankDatas
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTankDatas());
  }, [dispatch]);

  if (data) {
    graphData.datasets[0].data = createData(data, "temp");
    graphData.datasets[1].data = createData(data, "ph");
    graphData.datasets[2].data = createData(data, "dox");
    graphData.datasets[3].data = createData(data, "brix");
  }
  return (
    <Paper style={{ padding: 30 }}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          {data && <AGraph data={graphData} options={options} />}
        </Grid>
        {/* <Grid item xs={6}>
          <RealtimeGraphContainer />
        </Grid>
        <Grid item xs={6}>
          <BGraph />
        </Grid>
        <Grid item xs={6}>
          <CGraph data={{ type: "line", data: graphData, options }} />
        </Grid> */}
        <Grid item xs={6}>
          {data && <AStyledChart data={createData(data, "temp")} />}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default GraphsContainer;
