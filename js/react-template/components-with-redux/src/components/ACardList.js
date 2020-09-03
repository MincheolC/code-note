import React from "react";
import ACard from "./ACard";

function ACardList(props) {
  const { records } = props;
  return (
    <>
      {records.map((record) => (
        <ACard record={record} />
      ))}
    </>
  );
}

export default ACardList;
