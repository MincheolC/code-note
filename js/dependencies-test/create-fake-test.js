const { getCsv } = require('./stream-test');

function oneDimensional(x1, x2, y1, y2) {
  const a = (y2 - y1) / (x2 - x1);
  const b = y1 - a * x1;
  return (x) => a * x + b;
}

function build(start, end, factors, f) {
  const {
    phFrom, phTo, brixFrom, brixTo,
  } = factors;
  const FIFTEEN_MINUTES = 60 * 15;
  const count = Math.floor((end - start) / FIFTEEN_MINUTES);

  const phFn = f(0, count - 1, phFrom, phTo);
  const brixFn = f(0, count - 1, brixFrom, brixTo);

  const data = [];
  for (let i = 0; i < count; i += 1) {
    data.push({
      timestamp: start + i * FIFTEEN_MINUTES,
      ph: Number(phFn(i).toFixed(2)),
      brix: Number(brixFn(i).toFixed(2)),
    });
  }
  return data;
}

function buildFakeData(err, result) {
  if (err) {
    return console.log(err);
  }

  let fakeData = [];
  for (let i=0; i<result.length-1; i+=1) {
    const { timestamp: start, ph: phFrom, brix: brixFrom } = result[i];
    const { timestamp: end, ph: phTo, brix: brixTo } = result[i+1];
    fakeData = fakeData.concat(build(start, end, { phFrom, phTo, brixFrom, brixTo }, oneDimensional));
  }
  return fakeData;
}

getCsv(buildFakeData)