const TABLENAME = 'apt_tenants';

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(TABLENAME, [{
    apt_id: 1,
    tenant_id: 1,
  }, {
    apt_id: 1,
    tenant_id: 2,
  }, {
    apt_id: 2,
    tenant_id: 3,
  }, {
    apt_id: 3,
    tenant_id: 3,
  }, {
    apt_id: 4,
    tenant_id: 4,
  }, {
    apt_id: 5,
    tenant_id: 4,
  }, {
    apt_id: 6,
    tenant_id: 4,
  }, {
    apt_id: 6,
    tenant_id: 5,
  }, {
    apt_id: 6,
    tenant_id: 6,
  }, {
    apt_id: 7,
    tenant_id: 7,
  }, {
    apt_id: 8,
    tenant_id: 8,
  }, {
    apt_id: 9,
    tenant_id: 9,
  }, {
    apt_id: 10,
    tenant_id: 10,
  }, {
    apt_id: 11,
    tenant_id: 10,
  }, {
    apt_id: 12,
    tenant_id: 11,
  }, {
    apt_id: 13,
    tenant_id: 12,
  }, {
    apt_id: 14,
    tenant_id: 13,
  }, {
    apt_id: 15,
    tenant_id: 13,
  }, {
    apt_id: 16,
    tenant_id: 14,
  }, {
    apt_id: 17,
    tenant_id: 15,
  }], {}),
  down: queryInterface => queryInterface.bulkDelete(TABLENAME, null, {}),
};