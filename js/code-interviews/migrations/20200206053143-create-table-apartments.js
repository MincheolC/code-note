const TABLENAME = 'apartments';

module.exports = {
  up: (queryInterface, Sequelize, done) => {
    queryInterface.createTable(TABLENAME, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      building_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'buildings',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      unit_number: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
    }).then(result => done(null, result), err => done(err));
  },
  down: (queryInterface, Sequelize, done) => {
    queryInterface.dropTable(TABLENAME).then(result => done(null, result), err => done(err));
  },
};