function calculatePower(n) {
  const factorialMap = {
    0: 1,
    1: 1,
    2: 2,
    3: 6,
    4: 24,
    5: 120,
    6: 720,
    7: 5040,
    8: 40320,
    9: 362880,
  };
  const arr = Array.from(n.toString());
  let power = 0;

  arr.forEach((v) => {
    power += factorialMap[v];
  });
  return power;
}

function solution(n) {
  const team = new Set([n]);
  let currentMember = n;
  const isInValidRange = m => m >= 1 && m <= 1000000;

  while (1) {
    const nextMemberPower = calculatePower(currentMember);
    // if (team.has(nextMemberPower) || !isInValidRange(nextMemberPower)) {
    //   break;
    // }
    if (team.has(nextMemberPower)) {
      break;
    }
    team.add(nextMemberPower);
    currentMember = nextMemberPower;
  }

  const teamLeader = Array.from(team).sort((a, b) => b - a)[0];
  const teamPower = teamLeader * team.size;

  console.log(
    team,
    Array.from(team).sort((a, b) => b - a),
  );
  return teamPower;
}

console.log(solution(540));
console.log(solution(5));
// console.log(solution(1000000));
// console.log(solution(999999));
// console.log(solution(9));