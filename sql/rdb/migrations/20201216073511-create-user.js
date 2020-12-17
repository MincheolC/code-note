const { sequelize } = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.DataTypes.STRING,
    },
    age: {
      allowNull: false,
      type: Sequelize.DataTypes.INTEGER,
    },
    sex: {
      allowNull: false,
      type: Sequelize.DataTypes.TINYINT(1),
    },
    createdAt: {
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      type: Sequelize.DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      type: Sequelize.DataTypes.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('users'),
};
