import axios from "axios";
import _ from "lodash";
import moment from "moment";

export async function getTankDatas() {
  const response = await axios.get("/tankDatas");
  return response.data;
}

function createRandomValue(from, to, float = false) {
  return _.random(from, to, float);
}

export async function getTankRealtimeData() {
  return [
    {
      name: "tank1",
      temp: parseFloat(createRandomValue(28, 30, true).toFixed(1)),
      ph: parseFloat(createRandomValue(1.5, 2, true).toFixed(2)),
      dox: createRandomValue(40, 50),
      brix: createRandomValue(60, 90),
      createdAt: moment().unix(),
    },
    {
      name: "tank2",
      temp: parseFloat(createRandomValue(28, 30, true).toFixed(1)),
      ph: parseFloat(createRandomValue(1.5, 2, true).toFixed(2)),
      dox: createRandomValue(40, 50),
      brix: createRandomValue(60, 90),
      createdAt: moment().unix(),
    },
    {
      name: "tank3",
      temp: parseFloat(createRandomValue(28, 30, true).toFixed(1)),
      ph: parseFloat(createRandomValue(1.5, 2, true).toFixed(2)),
      dox: createRandomValue(40, 50),
      brix: createRandomValue(60, 90),
      createdAt: moment().unix(),
    },
  ];
}
