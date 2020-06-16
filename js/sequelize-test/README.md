# How this app has been built
Referred from [sequelize express-example](https://github.com/sequelize/express-example/blob/master/README.md)
### Express Setup
```sh
$ npm install -g express-generator
$ express .
$ npm install
```
### Sequelize Setup
```sh
$ npm install --save sequelize sequelize-cli mysql2

$ node_modules/.bin/sequelize init
$ node_modules/.bin/sequelize model:create --name User --attributes username:string
$ node_modules/.bin/sequelize model:create --name Task --attributes title:string
```

```sh
$ npm i --save-dev babel-register
touch .sequelizerc
```
##### .sequelizerc
```js
require("babel-register");

const path = require('path');

module.exports = {
  'config': path.resolve('config', 'config.js')
}
```
##### associate the models
```js
// task.js
// ...
  Task.associate = function(models) {
    // Using additional options like CASCADE etc for demonstration
    // Can also simply do Task.belongsTo(models.User);
    Task.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  }
// ...
```
```js
// user.js
// ...
  User.associate = function(models) {
    User.hasMany(models.Task);
  }
// ...
```