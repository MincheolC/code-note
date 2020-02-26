const TABLENAME = 'requests';

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(TABLENAME, [{
    status: 'open',
    apt_id: 1,
  }, {
    status: 'open',
    apt_id: 1,
  }, {
    status: 'open',
    apt_id: 2,
  }, {
    status: 'open',
    apt_id: 3,
  }, {
    status: 'open',
    apt_id: 6,
  }, {
    status: 'open',
    apt_id: 7,
  }, {
    status: 'open',
    apt_id: 9,
  }], {}),
  down: queryInterface => queryInterface.bulkDelete(TABLENAME, null, {}),
};