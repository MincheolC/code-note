const TABLE_NAME = 'users';

module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      TABLE_NAME,
      [
        {
          id: 1,
          name: 'u1',
          age: 10,
          sex: 1,
        },
        {
          id: 2,
          name: 'u2',
          age: 20,
          sex: 0,
        },
      ],
      {},
    ),
  down: (queryInterface) => queryInterface.bulkDelete(TABLE_NAME, null, {}),
};
