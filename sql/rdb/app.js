const models = require('./models');

(async () => {
  try {
    await models.sequelize.sync();
    console.log('[Mysql] connected successfully!!')
  } catch (e) {
    console.error(e);
  }
})();

