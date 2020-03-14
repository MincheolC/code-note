const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('cdev', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        freezeTableName: true
    }
});

async function checkDBconnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

class User extends Model {}
User.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, primaryKey: true },
    pwd: DataTypes.STRING,
}, { sequelize, modelName: 'user' });

async function load() {
    try{
        await checkDBconnection()
        await sequelize.sync();
    } catch (error) {
        console.error(error);
    }

}

load();
module.exports = {
    user: User,
};
