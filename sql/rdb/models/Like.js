module.exports = (sequelize, DataTypes) => {
  const like = sequelize.define(
    'like',
    {},
    {
      indexes: [
        {
          unique: true,
          fields: ['articleId', 'userId'],
        },
      ],
    },
  );
  like.associate = (models) => {
    // associations can be defined here
    models.like.belongsTo(models.article, {
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });

    models.like.belongsTo(models.user, {
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return like;
};
