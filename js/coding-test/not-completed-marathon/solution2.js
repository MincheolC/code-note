function solution2(participant, completion) {
  participant.sort();
  completion.sort();

  const totalCounts = participant.length;
  let notCompletedPerson;

  for (let i = 0; i < totalCounts; i += 1) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
  return notCompletedPerson;
}

module.exports = {
  solution2,
};
