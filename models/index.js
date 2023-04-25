const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;

