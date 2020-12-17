module.exports = (sequelize, DataTypes) => {
  const follow = sequelize.define('follow', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    followingId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  });
  follow.associate = (models) => {
    // associations can be defined here
  };
  return follow;
};
