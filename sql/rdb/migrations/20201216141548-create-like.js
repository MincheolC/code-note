const { sequelize } = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface
      .createTable('likes', {
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
        articleId: {
          allowNull: false,
          references: {
            model: 'articles',
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
        queryInterface.addIndex('likes', ['articleId', 'userId'], {
          indicesType: 'UNIQUE',
        }),
      ),
  down: (queryInterface) => queryInterface.dropTable('likes'),
};
