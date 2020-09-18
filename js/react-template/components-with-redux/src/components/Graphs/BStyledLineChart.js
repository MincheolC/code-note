import React from "react";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import LineChart from "./LineChart";
import { hexToRgb, WHITE, GRAY, INDIGO, RED } from "../../assets/jss";

function BStyledLineChart({ data, label, type, unit }) {
  const graphData = {
    datasets: [
      {
        fill: false,

        backgroundColor: GRAY[6],
        borderColor: GRAY[6], // line
        borderWidth: 4,

        pointBackgroundColor: GRAY[6],
        pointBorderWidth: 1,
        pointRadius: 4,

        pointHoverRadius: 3,
        pointHoverBackgroundColor: GRAY[6],
        pointHoverBorderColor: GRAY[6],
        pointHoverBorderWidth: 3,
      },
      {
        fill: false,

        backgroundColor: INDIGO[7],
        borderColor: INDIGO[7], // line
        borderWidth: 4,

        pointBackgroundColor: INDIGO[7],
        pointBorderWidth: 1,
        pointRadius: 4,

        pointHoverRadius: 3,
        pointHoverBackgroundColor: INDIGO[7],
        pointHoverBorderColor: INDIGO[7],
        pointHoverBorderWidth: 3,
      },
      {
        fill: false,

        backgroundColor: RED[7],
        borderColor: RED[7], // line
        borderWidth: 4,

        pointBackgroundColor: RED[7],
        pointBorderWidth: 1,
        pointRadius: 4,

        pointHoverRadius: 3,
        pointHoverBackgroundColor: RED[7],
        pointHoverBorderColor: RED[7],
        pointHoverBorderWidth: 3,
      },
    ],
  };

  const options = {
    animation: {
      duration: 0,
    },
    layout: {
      padding: {
        left: 25,
        right: 0,
        top: 0,
        bottom: 25,
      },
    },
    legend: {
      display: false,
    },
    hover: {
      mode: "dataset",
      intersect: true,
    },
    tooltips: {
      displayColors: false,
      callbacks: {
        title: (item) =>
          moment(new Date(item[0].xLabel)).format("MMM D YYYY, hh:mm A"),
      },
    },
    scales: {
      maintainAspectRatio: false,
      xAxes: [
        {
          type: "time",
          distribution: "series",
          gridLines: {
            display: false,
          },
          ticks: {
            padding: 5,
            fontColor: `rgba(${hexToRgb(GRAY[8])}, 0.7)`,
            fontSize: 14,
          },
        },
      ],
      yAxes: [
        {
          position: "left",
          gridLines: {
            display: false,
          },
          ticks: {
            min: 24,
            max: 34,
            stepSize: 2,
            padding: 10,
            fontColor: `rgba(${hexToRgb(GRAY[8])}, 0.7)`,
            fontSize: 14,
          },
        },
      ],
    },
  };
  graphData.datasets[0].data = data[0];
  graphData.datasets[0].label = "0";
  graphData.datasets[1].data = data[1];
  graphData.datasets[1].label = "1";
  graphData.datasets[2].data = data[2];
  graphData.datasets[2].label = "2";
  if (type === "ph") {
    options.scales.yAxes[0].ticks.min = 0;
    options.scales.yAxes[0].ticks.max = 3;
    options.scales.yAxes[0].ticks.stepSize = 0.5;
  }
  if (type === "dox") {
    options.scales.yAxes[0].ticks.min = 30;
    options.scales.yAxes[0].ticks.max = 60;
    options.scales.yAxes[0].ticks.stepSize = 5;
  }
  return (
    <Paper style={{ background: WHITE, padding: 15 }} elevation={3}>
      <LineChart data={graphData} options={options} />
    </Paper>
  );
}

export default BStyledLineChart;
