function solution(progresses, speeds) {
  const answer = [];
  const COMPLETE = 100;

  let max = -1;
  let count = 1;
  progresses
    .map((progress, index) => {
      const quotient = parseInt((COMPLETE - progress) / speeds[index], 10);
      const remainder = (COMPLETE - progress) % speeds[index];
      return remainder ? quotient + 1 : quotient;
    })
    .map((dayToDeploy) => {
      if (max < dayToDeploy) max = dayToDeploy;
      return max;
    })
    .forEach((value, index, daysToDeploy) => {
      const nextValue = daysToDeploy[index + 1] || 0;
      if (nextValue !== value) {
        answer.push(count);
        count = 1;
      } else {
        count += 1;
      }
    });

  return answer;
}


function solution1(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
  let maxDay = days[0];

  for(let i = 0, j = 0; i< days.length; i++){
      if(days[i] <= maxDay) {
          answer[j] += 1;
      } else {
          maxDay = days[i];
          answer[++j] = 1;
      }
  }

  return answer;
}

function solution3(progresses, speeds) {
  const durations = progresses.map((p, index) => Math.ceil((100 - p) / speeds[index]));
  const answer = [];
  let max = durations[0];
  let count = 1;

  for (let i = 1; i < durations.length; i += 1) {
    const duration = durations[i];
    if (max < duration) {
      max = duration;
      answer.push(count);
      count = 1;
    } else {
      count += 1;
    }
  }

  answer.push(count);
  return answer;
}

console.log(solution3([93, 30, 55], [1, 30, 5]));
console.log(solution3([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));