const TABLENAME = 'requests';

module.exports = {
  up: (queryInterface, Sequelize, done) => {
    queryInterface.createTable(TABLENAME, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      status: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
    }).then(result => done(null, result), err => done(err));
  },
  down: (queryInterface, Sequelize, done) => {
    queryInterface.dropTable(TABLENAME).then(result => done(null, result), err => done(err));
  },
};