function getAvg2x(arr) {
  const avg2x = [];

  for (let i = 1; i < arr.length; i += 1) {
    const a = arr[i - 1];
    const b = arr[i];
    avg2x.push((a + b) / 2);
  }
  return avg2x;
}

function getAvg3x(arr) {
  const avg3x = [];

  for (let i = 2; i < arr.length; i += 1) {
    const a = arr[i - 2];
    const b = arr[i - 1];
    const c = arr[i];
    avg3x.push((a + b + c) / 3);
  }
  return avg3x;
}

function getMinimalValueIndex(arr) {
  const minimal = {
    value: arr[0],
    index: 0,
  };
  for (let i = 1; i < arr.length; i += 1) {
    if (minimal.value > arr[i]) {
      minimal.value = arr[i];
      minimal.index = i;
    }
  }
  return minimal;
}

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const avg2x = getAvg2x(A);
  const avg3x = getAvg3x(A);
  const avg4x = getAvg2x(avg2x);

  const minimal2x = getMinimalValueIndex(avg2x);
  const minimal3x = getMinimalValueIndex(avg3x);
  const minimal4x = getMinimalValueIndex(avg4x);

  let minimalValue = 0;
  let minimalIndex = 0;

  if (minimal2x.value < minimal3x.value) {
    minimalValue = minimal2x.value;
    minimalIndex = minimal2x.index;
  } else if (minimal2x.value > minimal3x.value) {
    minimalValue = minimal3x.value;
    minimalIndex = minimal3x.index;
  } else {
    if (minimal2x.index < minimal3x.index) {
      minimalIndex = minimal2x.index;
    } else {
      minimalIndex = minimal3x.index;
    }
  }

  if (minimalValue > minimal4x.value) {
    minimalValue = minimal4x.value;
    minimalIndex = minimal4x.index;
  } else if (minimalValue === minimal4x.value) {
    if (minimalValue > minimal4x.index) {
      minimalIndex = minimal4x.index;
    }
  }
  return minimalIndex;
}
