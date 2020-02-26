const TABLENAME = 'tenants';

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(TABLENAME, [{
    name: 'a',
  }, {
    name: 'b',
  }, {
    name: 'c',
  }, {
    name: 'd',
  }, {
    name: 'e',
  }, {
    name: 'f',
  }, {
    name: 'g',
  }, {
    name: 'h',
  }, {
    name: 'i',
  }, {
    name: 'j',
  }, {
    name: 'k',
  }, {
    name: 'l',
  }, {
    name: 'm',
  }, {
    name: 'n',
  }, {
    name: 'o',
  }], {}),
  down: queryInterface => queryInterface.bulkDelete(TABLENAME, null, {}),
};