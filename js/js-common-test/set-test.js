const moment = require("moment");

const notifications = [
  {
    batchId: 1,
    teaName: "original",
    code: "PhHighLimitOver",
    max: 3.5,
    min: 2.5,
    value: 3.6,
    createdAt: 1599892370,
  },
  {
    batchId: 1,
    teaName: "original",
    code: "PhHighLimitOver",
    max: 3.5,
    min: 2.5,
    value: 3.6,
    createdAt: 1599892371,
  },
  {
    batchId: 2,
    teaName: "lemon",
    code: "PhLowLimitOver",
    max: 3.5,
    min: 2.5,
    value: 2.3,
    createdAt: 1599895970,
  },
  {
    batchId: 1,
    teaName: "original",
    code: "TempHighLimitOver",
    max: 31.5,
    min: 29.5,
    value: 32.6,
    createdAt: 1599031229,
  },
  {
    batchId: 1,
    teaName: "original",
    code: "TempLowLimitOver",
    max: 23.5,
    min: 22.5,
    value: 21,
    createdAt: 1599031311,
  },
  {
    batchId: 1,
    teaName: "original",
    code: "DoHighLimitOver",
    max: 61,
    min: 55,
    value: 62,
    createdAt: 1599031325,
  },
  {
    batchId: 2,
    teaName: "lemon",
    code: "DoLowLimitOver",
    max: 62,
    min: 52,
    value: 41,
    createdAt: 1599031357,
  },
  {
    batchId: 1,
    teaName: "original",
    code: "BrixHighLimitOver",
    max: 88,
    min: 87,
    value: 89,
    createdAt: 1599031413,
  },
  {
    batchId: 1,
    teaName: "original",
    code: "BrixLowLimitOver",
    max: 78,
    min: 75,
    value: 72,
    createdAt: 1599031434,
  },
];

function getTimeString(timestamp, format) {
  return moment(timestamp * 1000).format(format);
}

function formatTime(arr) {
  return arr
    .map((e) => ({
      ...e,
      createdAt: getTimeString(e.createdAt, "YYYY-MM-DD"),
    }))
    .reduce((acc, { batchId, code }) => {
      if (!acc.has(batchId)) {
        return acc.set(batchId, {
          [code]: 1,
        });
      }
      const current = acc.get(batchId);
      return acc.set(batchId, {
        ...current,
        [code]: current[code] ? current[code] + 1 : 1,
      });
    }, new Map());
}

function groupByBatchId(arr) {
  return arr.reduce((acc, { batchId, code }) => {
    if (!acc.has(batchId)) {
      return acc.set(batchId, {
        [code]: 1,
      });
    }
    const current = acc.get(batchId);
    return acc.set(batchId, {
      ...current,
      [code]: current[code] ? current[code] + 1 : 1,
    });
  }, new Map());
}

const map = groupByBatchId(notifications);
for (let [key, value] of map.entries()) {
  const totalCount = Object.values(value).reduce((sum, value) => sum + value);
  console.log(key, totalCount);
}
