const { solution } = require('../solution');
const { solution2 } = require('../solution2');

describe('solution', () => {
  it('should be return only one person who is not completed', () => {
    const participantsGroup1 = ['leo', 'kiki', 'eden'];
    const completedGroup1 = ['kiki', 'eden'];
    expect(solution(participantsGroup1, completedGroup1)).toBe('leo');

    const participantsGroup2 = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
    const completedGroup2 = ['marina', 'josipa', 'nikola', 'filipa'];
    expect(solution(participantsGroup2, completedGroup2)).toBe('vinko');

    const participantsGroup3 = ['mislav', 'stanko', 'mislav', 'ana'];
    const completedGroup3 = ['stanko', 'mislav', 'ana'];
    expect(solution(participantsGroup3, completedGroup3)).toBe('mislav');
  });
});

describe('solution2', () => {
  it('should be return only one person who is not completed', () => {
    const participantsGroup1 = ['leo', 'kiki', 'eden'];
    const completedGroup1 = ['kiki', 'eden'];
    expect(solution2(participantsGroup1, completedGroup1)).toBe('leo');

    const participantsGroup2 = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
    const completedGroup2 = ['marina', 'josipa', 'nikola', 'filipa'];
    expect(solution2(participantsGroup2, completedGroup2)).toBe('vinko');

    const participantsGroup3 = ['mislav', 'stanko', 'mislav', 'ana'];
    const completedGroup3 = ['stanko', 'mislav', 'ana'];
    expect(solution2(participantsGroup3, completedGroup3)).toBe('mislav');
  });
});
