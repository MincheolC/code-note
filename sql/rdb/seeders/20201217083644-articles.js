const TABLE_NAME = 'articles';

module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      TABLE_NAME,
      [
        {
          id: 1,
          userId: 1,
          title: 'a1',
          content: 'a1',
        },
        {
          id: 2,
          userId: 2,
          title: 'a2',
          content: 'a2',
        },
      ],
      {},
    ),
  down: (queryInterface) => queryInterface.bulkDelete(TABLE_NAME, null, {}),
};
