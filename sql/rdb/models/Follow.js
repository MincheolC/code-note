module.exports = (sequelize, DataTypes) => {
  const follow = sequelize.define('follow', {
    userId: {
      type: DataTypes.INTEGER,
    },
    followingId: DataTypes.STRING,
  });
  follow.associate = (models) => {
    // associations can be defined here
  };
  return follow;
};
