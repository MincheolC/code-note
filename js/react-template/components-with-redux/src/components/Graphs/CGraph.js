import React, { useRef, useEffect } from "react";
import Chart from "chart.js";

let myChart;

function CGraph(props) {
  const { data } = props;
  const canvasRef = useRef();

  useEffect(() => {
    const myChartRef = canvasRef.current.getContext("2d");
    if (!myChart) {
      myChart = new Chart(myChartRef, data);
    }
    myChart.update();
  }, [data]);

  return (
    <div>
      <canvas id="myChart" ref={canvasRef} width="400" height="200"></canvas>
    </div>
  );
}

export default CGraph;
