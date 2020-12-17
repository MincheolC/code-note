const { sequelize } = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface
      .createTable('follows', {
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
        followingId: {
          allowNull: false,
          references: {
            model: 'users',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          type: Sequelize.DataTypes.INTEGER,
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
      })
      .then(() =>
        queryInterface.addIndex('follows', ['userId', 'followingId'], {
          indicesType: 'UNIQUE',
        }),
      ),
  down: (queryInterface) => queryInterface.dropTable('follows'),
};
