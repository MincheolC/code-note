const { commentTemplate } = require('./helpers')._;

describe('commentTemplate', () => {
  it('valid', () => {
    const comment = {
      id: 1472723537672,
      author: '김다음',
      comment: '첫 번째 댓글입니다.',
    };

    expect(commentTemplate(comment)).toMatchSnapshot();
  });
});
