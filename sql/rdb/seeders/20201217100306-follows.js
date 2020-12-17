const TABLE_NAME = 'follows';

module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      TABLE_NAME,
      [
        {
          id: 1,
          userId: 1,
          followingId: 2,
        },
        {
          id: 2,
          userId: 2,
          followingId: 1,
        },
      ],
      {},
    ),
  down: (queryInterface) => queryInterface.bulkDelete(TABLE_NAME, null, {}),
};
