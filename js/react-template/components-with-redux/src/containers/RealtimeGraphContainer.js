import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTankRealtimeData } from "../redux/modules/tankDatas";
import { INDIGO, WHITE, RED, ORANGE, GRAY } from "../assets/jss";
import moment from "moment";
import AGraph from "../components/Graphs/AGraph";

function createData(tankDatas, key) {
  const yCount = 10;
  const n = tankDatas.length > yCount ? tankDatas.length - yCount : 0;

  return tankDatas
    .map((tankData) => ({
      x: moment(tankData.createdAt * 1000),
      y: tankData[key],
    }))
    .slice(n, n + yCount);
}

const graphData = {
  datasets: [
    {
      label: "온도",
      fill: false,

      backgroundColor: INDIGO[7],
      borderColor: INDIGO[7], // line

      pointBackgroundColor: WHITE,
      pointBorderWidth: 1,
      pointRadius: 3,

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
      lineTension: 0.25,

      backgroundColor: GRAY[7],
      borderColor: GRAY[7], // line

      pointBackgroundColor: WHITE,
      pointBorderWidth: 2,
      pointRadius: 3,

      pointHoverRadius: 5,
      pointHoverBackgroundColor: WHITE,
      pointHoverBorderColor: GRAY[7],
      pointHoverBorderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  animation: {
    duration: 0,
  },
  legend: false,
  scales: {
    xAxes: [
      {
        type: "time",
        distribution: "series",
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

function RealtimeGraphContainer() {
  const { loading, error, realtimeTankData: data } = useSelector(
    (state) => state.tankDatas
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getTankRealtimeData());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  if (data) {
    graphData.datasets[0].data = createData(data, "temp");
    graphData.datasets[3].data = createData(data, "brix");
  }
  return <>{data && <AGraph data={graphData} options={options} />}</>;
}

export default RealtimeGraphContainer;
