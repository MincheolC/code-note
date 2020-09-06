const moment = require("moment-timezone");
const _ = require("lodash");

function createRandomValues(from, to) {
  return _.random(from, to);
}

/**
 * name (string)
 * temp (number)
 * ph (number)
 * dox (number)
 * brix (number)
 * createdAt (number)
 */

function build(diff) {
  const from = moment.tz("2020-09-06 15:00", "Asia/Seoul").unix();
  const to = moment.tz("2020-09-06 16:00", "Asia/Seoul").unix();

  const datas = [];

  let time = from;
  while (time < to) {
    datas.push({
      name: "tank1",
      temp: parseFloat(createRandomValues(29.0, 31.5).toFixed(1)),
      ph: parseFloat(createRandomValues(2.5, 3.15).toFixed(2)),
      dox: createRandomValues(70, 75),
      brix: createRandomValues(35, 55),
      createdAt: time,
    });
    time += 36;
  }
  return datas;
}

console.log(build());
