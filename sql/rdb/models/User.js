module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'user',
    {
      name: DataTypes.STRING,
    }
  );
  user.associate = (models) => {
    // associations can be defined here
    user.hasMany(models.article);
  };
  return user;
};
