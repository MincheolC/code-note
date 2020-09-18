import React from "react";
import { Bar, HorizontalBar } from "react-chartjs-2";

function BarChart(props) {
  return <HorizontalBar data={props.data} options={props.options} />;
}

export default BarChart;
