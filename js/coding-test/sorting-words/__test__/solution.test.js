const { solution } = require('../solution');

describe('solution', () => {
  it('should be return sorted string array', () => {
    const input = [
      111,
      '한글',
      '13',
      'but',
      'i',
      'wont',
      'hesitate',
      'no',
      'more',
      'no',
      'more',
      'it',
      'cannot',
      'wait',
      'im',
      'yours',
    ];
    const expected = [
      'i',
      'im',
      'it',
      'no',
      'but',
      'more',
      'wait',
      'wont',
      'yours',
      'cannot',
      'hesitate',
    ];

    expect(solution(input)).toEqual(expected);
  });
});
