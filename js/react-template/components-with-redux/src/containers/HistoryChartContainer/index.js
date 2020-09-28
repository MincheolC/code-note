import React, { useState } from "react";
import moment from "moment";
import HistoryChart from "../../components/Graphs/HistoryChart";
import { getData, filterData } from "./fakeHistoryData";

function formatData(data, key) {
  return data.map((e) => ({
    x: moment(e.timestamp * 1000),
    y: e[key],
  }));
}

function HistoryChartContainer() {
  const datas = getData(1600905600, 1601262000);
  const [data, setData] = useState();

  const handleData = (unit) => {
    switch (unit) {
      case "hour":
        setData(filterData(datas, "hour"));
        break;
      case "day":
        setData(filterData(datas, "day"));
        break;
      default:
        setData(datas);
    }
  };

  return (
    <>
      <button onClick={() => handleData()}>15분</button>
      <button onClick={() => handleData("hour")}>60분</button>
      <button onClick={() => handleData("day")}>일</button>
      {data && <HistoryChart data={formatData(data, "ph")} />}
    </>
  );
}

export default HistoryChartContainer;
