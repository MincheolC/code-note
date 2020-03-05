const TABLENAME = 'apt_tenants';

module.exports = {
  up: (queryInterface, Sequelize, done) => {
    queryInterface.createTable(TABLENAME, {
      tenant_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tenants',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      apt_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'apartments',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    }).then(result => done(null, result), err => done(err));
  },
  down: (queryInterface, Sequelize, done) => {
    queryInterface.dropTable(TABLENAME).then(result => done(null, result), err => done(err));
  },
};