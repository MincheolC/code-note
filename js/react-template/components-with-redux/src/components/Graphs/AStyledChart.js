import React from "react";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import AGraph from "./AGraph";
import {
  hexToRgb,
  WHITE,
  greenCardHeader,
  redCardHeader,
  indigoCardHeader,
  orangeCardHeader,
  grayCardHeader,
} from "../../assets/jss";

function AStyledChart({ data, label, type, unit }) {
  const graphData = {
    datasets: [
      {
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
          // time: {
          //   unit: "minute",
          //   displayFormats: {
          //     second: "HH:mm:ss",
          //     minute: "HH:mm",
          //     day: "MM D HH:mm",
          //   },
          // },
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
  graphData.datasets[0].data = data;
  graphData.datasets[0].label = label;
  if (type === "ph") {
    options.scales.yAxes[0].ticks.min = 0;
    options.scales.yAxes[0].ticks.max = 10;
    options.scales.yAxes[0].ticks.stepSize = 2;
  }
  if (type === "dox") {
    options.scales.yAxes[0].ticks.min = 0;
    options.scales.yAxes[0].ticks.max = 100;
    options.scales.yAxes[0].ticks.stepSize = 20;
  }
  // if (unit) {
  //   options.scales.xAxes[0].time.unit = unit;
  // }
  return <AGraph data={graphData} options={options} />;
}

export default AStyledChart;
