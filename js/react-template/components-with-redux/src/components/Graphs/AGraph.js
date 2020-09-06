import React from "react";
import { Line } from "react-chartjs-2";

function AGraph(props) {
  return <Line data={props.data} options={props.options} />;
}

export default AGraph;
