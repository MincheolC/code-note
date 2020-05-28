function indexOfShortest(arr) {
  let lowest = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][1] < arr[lowest][1]) {
      lowest = i;
    } else if (arr[i][1] === arr[lowest][1]) {
      lowest = arr[i][0] < arr[lowest][0] ? i : lowest;
    }
  }
  return lowest;
}

function solution(jobs) {
  const sortedJobs = Array.from(jobs).sort((a, b) => a[0] - b[0]);
  let workingJob = sortedJobs.shift();
  let workCompleteTime = workingJob[1];
  let totalProcessTime = workCompleteTime;

  while (sortedJobs.length > 0) {
    const waitQueue = [];
    for (let i = 0; i < sortedJobs.length; i += 1) {
      if (sortedJobs[i][0] > workCompleteTime) break;
      waitQueue.push(sortedJobs[i]);
    }

    if (waitQueue.length > 0) {
      const shortedProcessJobIndex = indexOfShortest(waitQueue);
      workingJob = sortedJobs.splice(shortedProcessJobIndex, 1)[0];
      workCompleteTime += workingJob[1];
    } else {
      workingJob = sortedJobs.shift();
      workCompleteTime = workingJob[0] + workingJob[1];
    }

    totalProcessTime += workCompleteTime - workingJob[0];
  }

  return totalProcessTime / jobs.length;
}

function solution1(jobs) {
  const sortedJobs = Array.from(jobs).sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
});
  let workCompleteTime = 0;
  let totalProcessTime = 0;

  while (sortedJobs.length > 0) {
    let min = Infinity;
    let minIndex = 0;

    for (let i = 0; i < sortedJobs.length; i += 1) {
      const startTime = sortedJobs[i][0];
      const processTime = sortedJobs[i][1];
      if (startTime > workCompleteTime) break;
      if (processTime < min) {
        min = processTime;
        minIndex = i;
      } else if (processTime === min) {
        if (startTime < sortedJobs[minIndex][0]) {
          min = processTime;
          minIndex = i;
        }
      }
    }

    const [startTime, processTime] = sortedJobs.splice(minIndex, 1)[0];
    workCompleteTime = Math.max(
      workCompleteTime + processTime,
      startTime + processTime
    );
    totalProcessTime += workCompleteTime - startTime;
  }

  return parseInt(totalProcessTime / jobs.length, 10);
}

const solution = (jobs) => {
  let jobsLen = jobs.length;
  let totalTime = 0;
  let completeTime = 0;
  jobs = jobs.sort((arr1, arr2) => arr1[0] - arr2[0]);
  while (jobs.length != 0) {
    const { startTime, spendTime, remainArr } = getMin(jobs, completeTime);
    completeTime = Math.max(completeTime + spendTime, startTime + spendTime);
    totalTime += completeTime - startTime;
    jobs = remainArr;
  }
  return Math.floor(totalTime / jobsLen);
};
const getMin = (arr, completeTime) => {
  let min = Infinity;
  let minIndex = 0;
  let index = 0;
  for (let a of arr) {
    if (a[1] < min && a[0] <= completeTime) {
      min = a[1];
      minIndex = index;
    }
    index += 1;
  }

  if (min === Infinity) {
    let start = arr[0][0];
    index = 0;
    while (index < arr.length) {
      if (arr[index][0] !== start) break;
      if (arr[index][1] < min) {
        min = arr[index][1];
        minIndex = index;
      }
      index += 1;
    }
    console.log(min, minIndex);
  }
  const startTime = arr[minIndex][0];
  const spendTime = arr[minIndex][1];
  arr.splice(minIndex, 1);
  return {
    startTime,
    spendTime,
    remainArr: arr,
  };
};
