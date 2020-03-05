const TABLENAME = 'tenants';

module.exports = {
  up: (queryInterface, Sequelize, done) => {
    queryInterface.createTable(TABLENAME, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
    }).then(result => done(null, result), err => done(err));
  },
  down: (queryInterface, Sequelize, done) => {
    queryInterface.dropTable(TABLENAME).then(result => done(null, result), err => done(err));
  },
};