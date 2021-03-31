function isAvailable(boat, person, limit) {
  return boat + person <= limit;
}

function solution(people, limit) {
  let boatsCount = 0;
  let boat = 0;
  let left = 0;
  let right = people.length - 1;

  people.sort((a, b) => b - a);

  while (left <= right) {
    const heaviest = people[left];
    const lightest = people[right];

    if (isAvailable(boat, heaviest, limit)) {
      boat += heaviest;
      left += 1;
    }

    if (isAvailable(boat, lightest, limit)) {
      boat += lightest;
      right -= 1;
    }

    boatsCount += 1;
    boat = 0;
  }

  return boatsCount;
}
