module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    age: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    sex: {
      allowNull: false,
      type: DataTypes.TINYINT(1),
    },
  });
  user.associate = (models) => {
    // associations can be defined here
    user.hasMany(models.article);
  };
  return user;
};
