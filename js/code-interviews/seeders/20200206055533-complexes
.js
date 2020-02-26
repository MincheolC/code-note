const TABLENAME = 'complexes';

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(TABLENAME, [{
    name: '1단지',
  }, {
    name: '2단지',
  }, {
    name: '3단지',
  }, {
    name: '4단지',
  }, {
    name: '5단지',
  }, {
    name: '6단지',
  }, {
    name: '7단지',
  }], {}),
  down: queryInterface => queryInterface.bulkDelete(TABLENAME, null, {}),
};