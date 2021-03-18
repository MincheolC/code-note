const models = require('./models');

// (async () => {
//   try {
//     await models.sequelize.sync();
//     console.log('[Mysql] connected successfully!!')
//   } catch (e) {
//     console.error(e);
//   }
// })();

async function createUsers(from, to) {
  const users = [];
  for (let i = from; i <= to; i += 1) {
    users.push({
      id: i,
      name: `u${i}`,
      age: Math.floor(Math.random() * 100),
      sex: Math.random() > 0.5 ? 1 : 0,
    })
  }
  try {
    const createdUsers = await models.user.bulkCreate(users);
    console.log(createdUsers.length);
  } catch (e) {
    console.error(e);
  }

}

async function createArticles(from, to) {
  const articles = [];
  for (let i = from; i <= to; i += 1) {
    const userId = (i % 1000) === 0 ? 1000 : i % 1000;
    articles.push({
      id: i,
      userId,
      title: `a${i}`,
      content: `a${i}`,
    });
  }
  // console.log(articles);
  try {
    const createdArticles = await models.article.bulkCreate(articles);
    console.log(createdArticles.length);
  } catch (e) {
    console.error(e);
  }
}

async function createLikes(from, to) {
  const likes = [];
  for (let i = from; i <= to; i += 1) {
    const userId = i % 1000 === 0 ? 1000 : i % 1000;
    articles.push({
      id: i,
      userId,
      title: `a${i}`,
      content: `a${i}`,
    });
  }
  // console.log(articles);
  try {
    const createdArticles = await models.article.bulkCreate(articles);
    console.log(createdArticles.length);
  } catch (e) {
    console.error(e);
  }
}

// createUsers(3, 100000);
// createUsers(100001, 200000);
// createUsers(200001, 300000);

// createArticles(3, 100000);