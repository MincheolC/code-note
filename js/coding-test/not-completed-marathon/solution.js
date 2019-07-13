function buildObjectGroupedByName(array) {
  const newObject = {};
  array.forEach((value) => {
    if (!newObject[value]) {
      newObject[value] = 1;
    } else {
      newObject[value] += 1;
    }
  });

  return newObject;
}

function getNotMatchedKey(participants, completeds) {
  const participantNames = Object.keys(participants);
  let notMatchedKey;
  participantNames.forEach((participantName) => {
    if (participants[participantName] !== completeds[participantName]) {
      notMatchedKey = participantName;
    }
  });
  return notMatchedKey;
}

function solution(participants, completeds) {
  const participantsGroupByName = buildObjectGroupedByName(participants);
  const completedGroupByName = buildObjectGroupedByName(completeds);

  const notCompletedPerson = getNotMatchedKey(participantsGroupByName, completedGroupByName);
  return notCompletedPerson;
}

module.exports = {
  solution,
};
