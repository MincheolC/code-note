import React, { useState } from "react";
import moment from "moment";
import HistoryChart from "../../components/Graphs/HistoryChart";
import { getData, filterData } from "./fakeHistoryData";

function formatData(data, key) {
  return data.map((e) =>
    e.map((e) => ({
      x: moment(e.timestamp * 1000),
      y: e[key],
    }))
  );
}

function HistoryChartContainer() {
  const data1 = getData(1600905600, 1601262000, 1);
  const data2 = getData(1600905600, 1601262000, 2);
  const data3 = getData(1600905600, 1601262000, 3);
  const data4 = getData(1600905600, 1601262000);
  const [data, setData] = useState();

  const handleData = (unit) => {
    switch (unit) {
      case "hour":
        setData([
          filterData(data1, "hour"),
          filterData(data2, "hour"),
          filterData(data3, "hour"),
          filterData(data4, "hour"),
        ]);
        break;
      case "day":
        setData([
          filterData(data1, "day"),
          filterData(data2, "day"),
          filterData(data3, "day"),
          filterData(data4, "day"),
        ]);
        break;
      default:
        setData([data1, data2, data3, data4]);
    }
  };

  return (
    <>
      <button onClick={() => handleData()}>15분</button>
      <button onClick={() => handleData("hour")}>60분</button>
      <button onClick={() => handleData("day")}>일</button>
      {data && <HistoryChart datas={formatData(data, "ph")} />}
    </>
  );
}

export default HistoryChartContainer;
