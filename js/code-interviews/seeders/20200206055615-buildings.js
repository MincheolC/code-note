const TABLENAME = 'buildings';

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(TABLENAME, [{
    complex_id: 1,
    name: '101동',
    address: '서울시 관악구 신림동 한빛아파트'
  }, {
    complex_id: 1,
    name: '102동',
    address: '서울시 관악구 신림동 한빛아파트'
  }, {
    complex_id: 1,
    name: '103동',
    address: '서울시 관악구 신림동 한빛아파트'
  }, {
    complex_id: 1,
    name: '104동',
    address: '서울시 관악구 신림동 한빛아파트'
  }, {
    complex_id: 2,
    name: '201동',
    address: '서울시 관악구 신림동 한빛아파트'
  }, {
    complex_id: 2,
    name: '202동',
    address: '서울시 관악구 신림동 한빛아파트'
  }, {
    complex_id: 2,
    name: '203동',
    address: '서울시 관악구 신림동 한빛아파트'
  }, {
    complex_id: 3,
    name: '301동',
    address: '서울시 관악구 신림동 한빛아파트'
  }, {
    complex_id: 3,
    name: '302동',
    address: '서울시 관악구 신림동 한빛아파트'
  }, {
    complex_id: 4,
    name: '401동',
    address: '서울시 관악구 신림동 한빛아파트'
  }], {}),
  down: queryInterface => queryInterface.bulkDelete(TABLENAME, null, {}),
};