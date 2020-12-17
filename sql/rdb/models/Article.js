module.exports = (sequelize, DataTypes) => {
  const article = sequelize.define('article', {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  });
  article.associate = (models) => {
    // associations can be defined here
    article.hasMany(models.like);
    models.article.belongsTo(models.user, {
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return article;
};
