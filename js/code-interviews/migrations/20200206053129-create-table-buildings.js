const TABLENAME = 'buildings';

module.exports = {
  up: (queryInterface, Sequelize, done) => {
    queryInterface.createTable(TABLENAME, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      complex_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'complexes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
    }).then(result => done(null, result), err => done(err));
  },
  down: (queryInterface, Sequelize, done) => {
    queryInterface.dropTable(TABLENAME).then(result => done(null, result), err => done(err));
  },
};