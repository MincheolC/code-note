import React, { useEffect } from "react";
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

  return <>{data && <ACardList records={data} />}</>;
}

export default ACardListContainer;
