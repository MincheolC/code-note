const TABLE_NAME = 'likes';

module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      TABLE_NAME,
      [
        {
          id: 1,
          userId: 1,
          articleId: 1,
        },
        {
          id: 2,
          userId: 2,
          articleId: 1,
        },
      ],
      {},
    ),
  down: (queryInterface) => queryInterface.bulkDelete(TABLE_NAME, null, {}),
};
