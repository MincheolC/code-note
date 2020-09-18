import React, { useEffect } from "react";
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

  return <>{data && <AGridList records={data} />}</>;
}

export default AGridListContainer;
