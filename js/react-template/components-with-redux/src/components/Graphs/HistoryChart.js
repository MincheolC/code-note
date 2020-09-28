import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { INDIGO } from "../../assets/jss";
import Chart from "chart.js";

const useStyles = makeStyles({
  container: {
    width: 900,
    height: 500,
    overflow: "auto",
  },
  content: {
    width: (props) => (props.length > 90 ? props.length * 20 : "100%"),
    height: 450,
  },
  y: {
    position: "absolute",
    left: 0,
    top: 0,
    pointerEvents: "none",
  },
});

const gData = {
  datasets: [
    {
      fill: false,
      lineTension: 1,

      backgroundColor: INDIGO[5],
      borderColor: INDIGO[5],
      borderWidth: 3,

      pointBackgroundColor: INDIGO[5],
      pointBorderWidth: 1,
      pointRadius: 3,

      pointHoverRadius: 3,
      pointHoverBackgroundColor: INDIGO[5],
      pointHoverBorderColor: INDIGO[5],
      pointHoverBorderWidth: 1,
    },
  ],
};

let myChart;

function HistoryChart(props) {
  const { data } = props;
  const classes = useStyles({ length: data.length });
  const chartRef = useRef();
  const yAxisRef = useRef();

  gData.datasets[0].data = data;

  useEffect(() => {
    if (myChart) {
      myChart.destroy();
    }
    const chart = chartRef.current.getContext("2d");
    const yChart = yAxisRef.current.getContext("2d");

    myChart = new Chart(chart, {
      type: "line",
      data: gData,
      options: {
        maintainAspectRatio: false,
        animation: {
          duration: 0,
          onComplete: function () {
            const scale = window.devicePixelRatio;
            const sourceCanvas = this.chart.canvas;
            const copyWidth = this.chart.scales["y-axis-0"].width - 5;
            const copyHeight =
              this.chart.scales["y-axis-0"].height +
              this.chart.scales["y-axis-0"].top +
              10;
            const targetElementWidth = this.canvas.clientWidth;
            const targetElementHeight = this.canvas.clientHeight;

            yChart.scale(scale, scale);
            yChart.canvas.width = copyWidth * scale;
            yChart.canvas.height = copyHeight * scale;

            yChart.canvas.style.width = `${copyWidth}px`;
            yChart.canvas.style.height = `${copyHeight}px`;
            yChart.drawImage(
              sourceCanvas,
              0,
              0,
              targetElementWidth,
              targetElementHeight
            );
          },
        },
        legend: {
          display: false,
        },
        hover: {
          mode: "nearest",
          intersect: false,
        },
        tooltips: {
          mode: "nearest",
          intersect: false,
        },
        scales: {
          xAxes: [
            {
              type: "time",
              distribution: "series",
            },
          ],
        },
      },
    });
  }, [data]);

  return (
    <div style={{ position: "relative" }}>
      <div className={classes.container}>
        <div className={classes.content}>
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
      <canvas className={classes.y} ref={yAxisRef} height={450}></canvas>
    </div>
  );
}

export default HistoryChart;
