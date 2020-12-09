// function activityNotifications(expenditure, d) {
//   let count = 0;
//   const subArr = expenditure.slice(0, d).sort((a, b) => a - b);

//   for (let i = d; i < expenditure.length; i += 1) {
//     const median = d % 2 === 1
//       ? subArr[Math.floor(d / 2)]
//       : (subArr[Math.floor(d / 2) - 1] + subArr[Math.floor(d / 2)]) / 2;
//     const current = expenditure[i];

//     if (median * 2 <= current) {
//       count += 1;
//     }
//     const index = subArr.indexOf(expenditure[i - d]);
//     subArr[index] = current;

//     let j = index;
//     let temp;
//     if (index > 0 && subArr[index - 1] > current) {
//       j -= 1;
//       while (j >= 0 && subArr[j] > current) {
//         temp = subArr[j];
//         subArr[j] = current;
//         subArr[j + 1] = temp;
//         j -= 1;
//       }
//     } else if (index < d - 1 && subArr[index + 1] < current) {
//       j += 1;
//       while (j < d && subArr[j] < current) {
//         temp = subArr[j];
//         subArr[j] = current;
//         subArr[j - 1] = temp;
//         j += 1;
//       }
//     }
//   }
//   return count;
// }

function updateMap(map, l, n) {
  map[l] -= 1;
  if (!map[l]) delete map[l];

  if (!map[n]) map[n] = 0;
  map[n] += 1;

  return map;
}

function getMedian(map, d, p) {
  let index = 0;
  const keys = Object.keys(map);
  let a = 0;
  let b = 0;
  while (p > 0) {
    const key = keys[index];
    p -= map[key];
    if (1 > p) {
      a = key;
    }
    if (!b && 2 > p) {
      b = key;
    }
    index += 1;
  }

  if (d % 2 === 0) {
    return (Number(a) + Number(b)) / 2;
  } else {
    return a;
  }
}

function activityNotifications(expenditure, d) {
  let map = {};
  let count = 0;
  const p = d % 2 === 0 ? d / 2 + 1 : (d + 1) / 2;

  expenditure.slice(0, d).forEach((i) => {
    if (!map[i]) map[i] = 0;
    map[i] += 1;
  });

  console.log(map);

  for (let i = 0; expenditure.length - d > i; i += 1) {
    if (i !== 0) {
      map = updateMap(map, expenditure[i - 1], expenditure[i + d - 1]);
    }
    const m = getMedian(map, d, p);
    const s = expenditure[i + d];

    if (s >= m * 2) count++;
  }

  return count;
}


console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5));
console.log(activityNotifications([1, 2, 3, 4, 4], 4));
