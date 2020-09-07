import React from "react";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import AGraph from "./AGraph";
import {
  hexToRgb,
  GREEN,
  WHITE,
  greenCardHeader,
  redCardHeader,
  indigoCardHeader,
  orangeCardHeader,
  grayCardHeader,
} from "../../assets/jss";

const graphData = {
  datasets: [
    {
      label: "온도",
      fill: false,
      lineTension: 0,

      backgroundColor: WHITE,
      borderColor: WHITE, // line
      borderWidth: 4,

      pointBackgroundColor: WHITE,
      pointBorderWidth: 1,
      pointRadius: 4,

      pointHoverRadius: 3,
      pointHoverBackgroundColor: WHITE,
      pointHoverBorderColor: WHITE,
      pointHoverBorderWidth: 3,
    },
  ],
};

const options = {
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
        // distribution: "series",
        time: {
          unit: "minute",
          displayFormats: {
            minute: "HH:mm",
            day: "MM D HH:mm",
          },
        },
        gridLines: {
          color: `rgba(${hexToRgb(WHITE)}, 0.3)`,
          borderDash: [5, 10],
          borderDashOffset: 5,
          drawBorder: false,
          zeroLineBorderDash: [5, 10],
          zeroLineBorderDashOffset: 5,
          zeroLineColor: `rgba(${hexToRgb(WHITE)}, 0.3)`,
        },
        ticks: {
          padding: 5,
          fontColor: `rgba(${hexToRgb(WHITE)}, 0.7)`,
          fontSize: 14,
        },
      },
    ],
    yAxes: [
      {
        position: "left",
        gridLines: {
          color: `rgba(${hexToRgb(WHITE)}, 0.3)`,
          borderDash: [5, 10],
          borderDashOffset: 5,
          drawBorder: false,
          zeroLineBorderDash: [5, 10],
          zeroLineBorderDashOffset: 5,
          zeroLineColor: `rgba(${hexToRgb(WHITE)}, 0.3)`,
          // offsetGridLines: true,
        },
        ticks: {
          min: 24,
          max: 34,
          stepSize: 2,
          padding: 10,
          fontColor: `rgba(${hexToRgb(WHITE)}, 0.7)`,
          fontSize: 14,
        },
      },
    ],
  },
};

function AStyledChart({ data }) {
  graphData.datasets[0].data = data;
  return (
    <Paper style={{ padding: 30, ...orangeCardHeader }}>
      <AGraph data={graphData} options={options} />
    </Paper>
  );
}

export default AStyledChart;
