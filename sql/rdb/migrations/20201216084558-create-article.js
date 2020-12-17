const { sequelize } = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: Sequelize.DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
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
  down: (queryInterface) => queryInterface.dropTable('articles'),
};
