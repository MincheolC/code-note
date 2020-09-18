import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTankRealtimeData } from "../redux/modules/tankDatas";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import JCard from "../components/Cards/JCard";
import BStyledLineChart from "../components/Graphs/BStyledLineChart";
import AStyledBarChart from "../components/Graphs/AStyledBarChart";

function createData(tankDatas, index, key) {
  const yCount = 10;
  const n = tankDatas.length > yCount ? tankDatas.length - yCount : 0;

  return tankDatas
    .map((tankData) => ({
      x: moment(tankData[index].createdAt * 1000),
      y: tankData[index][key],
    }))
    .slice(n, n + yCount);
}

function getData(tankDatas, key) {
  return tankDatas[tankDatas.length - 1].map((tankData) => tankData[key]);
}

function RealtimeGraphContainer(props) {
  const { loading, error, realtimeTankData: data } = useSelector(
    (state) => state.tankDatas
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getTankRealtimeData());
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  return (
    <>
      {data && data.length > 0 && (
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <JCard
              color={"indigo"}
              data={[
                createData(data, 0, "temp"),
                createData(data, 1, "temp"),
                createData(data, 2, "temp"),
              ]}
              type={"temp"}
              title={"온도"}
              content={`정상 범위: 28 ~ 32  측정값: ${
                data.length > 0 && data[data.length - 1].temp
              }`}
              unit={"second"}
            />
          </Grid>
          <Grid item xs={4}>
            <JCard
              color={"yellow"}
              data={[
                createData(data, 0, "ph"),
                createData(data, 1, "ph"),
                createData(data, 2, "ph"),
              ]}
              type={"ph"}
              title={"PH"}
              content={`정상 범위: 28 ~ 32  측정값: ${
                data.length > 0 && data[data.length - 1].ph
              }`}
              unit={"second"}
            />
          </Grid>
          <Grid item xs={4}>
            <JCard
              color={"gray"}
              data={[
                createData(data, 0, "dox"),
                createData(data, 1, "dox"),
                createData(data, 2, "dox"),
              ]}
              type={"dox"}
              title={"DO"}
              content={`정상 범위: 28 ~ 32  측정값: ${
                data.length > 0 && data[data.length - 1].dox
              }`}
              unit={"second"}
            />
          </Grid>
          <Grid item xs={4}>
            <BStyledLineChart
              data={[
                createData(data, 0, "temp"),
                createData(data, 1, "temp"),
                createData(data, 2, "temp"),
              ]}
              type={"temp"}
            />
          </Grid>
          <Grid item xs={4}>
            <AStyledBarChart data={getData(data, "temp")} type={"temp"} />
          </Grid>
        </Grid>
      )}
    </>
  );
  // return <>{data && <AStyledChart data={graphData} options={options} />}</>;
}

export default RealtimeGraphContainer;
