function solution(answers) {
  const person1Answer = [1, 2, 3, 4, 5];
  const person2Answer = [2, 1, 2, 3, 2, 4, 2, 5];
  const person3Answer = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let person1 = 0;
  let person2 = 0;
  let person3 = 0;

  answers.forEach((answer, i) => {
    person1 = person1Answer[i % person1Answer.length] === answer ? person1 + 1 : person1;
    person2 = person2Answer[i % person2Answer.length] === answer ? person2 + 1 : person2;
    person3 = person3Answer[i % person3Answer.length] === answer ? person3 + 1 : person3;
  });

  const scores = [person1, person2, person3];
  const maxValue = scores.reduce((a, b) => Math.max(a, b));

  const answer = [];
  scores.forEach((score, i) => {
    if (score === maxValue) answer.push(i + 1);
  });
  return answer;
}

// good solution
function solution2(answers) {
  const answer = [];
  const a1 = [1, 2, 3, 4, 5];
  const a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const a1c = answers.filter((a, i) => a === a1[i%a1.length]).length;
  const a2c = answers.filter((a, i) => a === a2[i%a2.length]).length;
  const a3c = answers.filter((a, i) => a === a3[i%a3.length]).length;
  const max = Math.max(a1c, a2c, a3c);

  if (a1c === max) answer.push(1);
  if (a2c === max) answer.push(2);
  if (a3c === max) answer.push(3);

  return answer;
}
