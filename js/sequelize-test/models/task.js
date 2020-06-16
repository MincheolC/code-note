'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('task', {
    title: DataTypes.STRING
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
    models.task.belongsTo(models.user, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Task;
};