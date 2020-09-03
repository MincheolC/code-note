import React, { useEffect } from "react";
import { Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getRecords } from "../redux/modules/records";
import ACardList from "../components/ACardList";

function ACardListContainer() {
  const { loading, error, records: data } = useSelector(
    (state) => state.records
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecords());
  }, [dispatch]);

  return (
    <Paper style={{ backgroundColor: "#fff5f5" }}>
      {data && <ACardList records={data} />}
    </Paper>
  );
}

export default ACardListContainer;
