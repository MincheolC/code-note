import React from "react";
import MultipleSelect from "../components/Selects/MultipleSelect";

const batchs = [
  "1 (2020.01.01 ~ 2020.01.21)",
  "2 (2020.02.01 ~ 2020.04.21)",
  "3 (2020.03.01 ~ 2020.03.21)",
  "4 (2020.04.01 ~ 2020.04.21)",
  "5 (2020.05.01 ~ 2020.05.21)",
  "6 (2020.06.01 ~ 2020.06.21)",
  "7 (2020.07.01 ~ 2020.07.21)",
  "8 (2020.08.01 ~ 2020.08.21)",
  "9 (2020.09.01 ~ 2020.09.21)",
];

export default function SelectContainer() {
  const [multipleSelected, setMultipleSelected] = React.useState([]);

  const handleMultipleSelect = (event) => {
    setMultipleSelected(event.target.value);
  };
  return (
    <MultipleSelect
      onChange={handleMultipleSelect}
      values={multipleSelected}
      items={batchs}
      label="Batchs"
    />
  );
}
