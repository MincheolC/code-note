import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import BarChart from "./BarChart";
import { hexToRgb, WHITE, GRAY, INDIGO, RED, ORANGE } from "../../assets/jss";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    color: GRAY[6],
    padding: 20,
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
});

function AStyledBarChart({ data, label, type, unit }) {
  const classes = useStyles();
  const backgroundColors = [INDIGO[4], ORANGE[4], RED[4]];
  const borderColors = [INDIGO[6], ORANGE[6], RED[6]];
  const graphData = {
    labels: ["Tank1", "Tank2", "Tank3"],
    datasets: [
      {
        backgroundColor: backgroundColors,
        borderColor: backgroundColors,
        borderWidth: 1,
        hoverBackgroundColor: borderColors,
        hoverBorderColor: borderColors,
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
          ticks: {
            min: 27,
            max: 31,
            stepSize: 0.5,
            padding: 10,
            fontColor: `rgba(${hexToRgb(GRAY[8])}, 0.7)`,
            fontSize: 14,
          },
        },
      ],
    },
  };

  graphData.datasets[0].data = data;
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
    <Paper style={{ background: WHITE }} elevation={3}>
      <Typography className={classes.title} variant="h3">
        온도
      </Typography>
      <BarChart data={graphData} options={options} />
    </Paper>
  );
}

export default AStyledBarChart;
