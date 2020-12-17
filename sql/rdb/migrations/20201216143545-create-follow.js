const { sequelize } = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface
      .createTable('follows', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          allowNull: false,
          references: {
            model: 'users',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          type: Sequelize.INTEGER,
        },
        followingId: {
          allowNull: false,
          references: {
            model: 'users',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          type: Sequelize.INTEGER,
        },
        createdAt: {
          allowNull: false,
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
          type: Sequelize.DATE,
        },
      })
      .then(() =>
        queryInterface.addIndex('follows', ['userId', 'followingId'], {
          indicesType: 'UNIQUE',
        }),
      ),
  down: (queryInterface) => queryInterface.dropTable('follows'),
};
