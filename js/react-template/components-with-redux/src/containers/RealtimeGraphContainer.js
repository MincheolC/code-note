import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTankRealtimeData } from "../redux/modules/tankDatas";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import JCard from "../components/Cards/JCard";

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

function RealtimeGraphContainer(props) {
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

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        {data && (
          <JCard
            color={"indigo"}
            data={createData(data, "temp")}
            type={"temp"}
            title={"온도"}
            content={`정상 범위: 28 ~ 32  측정값: ${
              data.length > 0 && data[data.length - 1].temp
            }`}
            unit={"second"}
          />
        )}
      </Grid>
      <Grid item xs={4}>
        {data && (
          <JCard
            color={"yellow"}
            data={createData(data, "ph")}
            type={"ph"}
            title={"PH"}
            content={`정상 범위: 28 ~ 32  측정값: ${
              data.length > 0 && data[data.length - 1].ph
            }`}
            unit={"second"}
          />
        )}
      </Grid>
      <Grid item xs={4}>
        {data && (
          <JCard
            color={"gray"}
            data={createData(data, "dox")}
            type={"dox"}
            title={"DO"}
            content={`정상 범위: 28 ~ 32  측정값: ${
              data.length > 0 && data[data.length - 1].dox
            }`}
            unit={"second"}
          />
        )}
      </Grid>
    </Grid>
  );
  // return <>{data && <AStyledChart data={graphData} options={options} />}</>;
}

export default RealtimeGraphContainer;
