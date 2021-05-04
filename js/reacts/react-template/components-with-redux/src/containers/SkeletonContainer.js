import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTankRealtimeData } from "../redux/modules/tankDatas";
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";

function SkeletonContainer() {
  const { loading, error, realtimeTankData: data } = useSelector(
    (state) => state.tankDatas
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getTankRealtimeData());
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  return (
    <>
      {(loading || data.length < 1
        ? Array.from(new Array(3))
        : data[0]
      ).map((item, index) =>
        item ? (
          <Typography>{item.temp}</Typography>
        ) : (
          <Skeleton variant="text" />
        )
      )}
    </>
  );
}

export default SkeletonContainer;
