import React, { useEffect } from "react";
import { Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getRecords } from "../redux/modules/records";
import AGridList from "../components/AGridList";

function AGridListContainer() {
  const { loading, error, records: data } = useSelector(
    (state) => state.records
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecords());
  }, [dispatch]);

  return (
    <Paper style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
      {data && <AGridList records={data} />}
    </Paper>
  );
}

export default AGridListContainer;
