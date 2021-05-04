import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GRAY } from '../../assets/jss';
import Chart from 'chart.js';
import styles from '../../assets/jss/components/historyChartStyle';

const useStyles = makeStyles(styles);

const datasetOptions = {
  fill: false,
  lineTension: 0.1,

  backgroundColor: GRAY[5],
  borderColor: GRAY[5],
  borderWidth: 2,

  pointBackgroundColor: GRAY[5],
  pointBorderWidth: 1,
  pointRadius: 2,

  pointHoverRadius: 2,
  pointHoverBackgroundColor: GRAY[7],
  pointHoverBorderColor: GRAY[7],
  pointHoverBorderWidth: 3,
};

let myChart;

function HistoryChart(props) {
  const { datas } = props;
  const classes = useStyles({ length: datas[0].length });
  const chartRef = useRef();
  const yAxisRef = useRef();

  const gData = {
    datasets: datas.map((data, index) => ({
      ...datasetOptions,
      data,
    })),
  };

  useEffect(() => {
    if (myChart) {
      myChart.destroy();
    }
    const chart = chartRef.current.getContext('2d');
    const yChart = yAxisRef.current.getContext('2d');

    myChart = new Chart(chart, {
      type: 'line',
      data: gData,
      options: {
        maintainAspectRatio: false,
        animation: {
          duration: 0,
          onComplete: function () {
            const sourceCanvas = this.chart.canvas;
            const copyWidth = this.chart.scales['y-axis-0'].width - 5;
            const copyHeight =
              this.chart.scales['y-axis-0'].height +
              this.chart.scales['y-axis-0'].top +
              10;
            const targetElementWidth = this.canvas.clientWidth;
            const targetElementHeight = this.canvas.clientHeight;

            yChart.canvas.width = copyWidth;
            yChart.canvas.height = copyHeight;

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
          mode: 'nearest',
          intersect: false,
        },
        tooltips: {
          mode: 'nearest',
          intersect: false,
        },
        scales: {
          xAxes: [
            {
              // type: "time",
              // distribution: "series",
              type: 'linear',
            },
          ],
        },
      },
    });
  }, [gData]);

  return (
    <div style={{ position: 'relative' }}>
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
