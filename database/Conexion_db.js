const { Sequelize } = require("sequelize");
const { config } = require("../config/config");
const setupModels = require("../models/index");

const USER = encodeURIComponent(config.dbUserpg);
const PASSWORD = encodeURIComponent(config.dbPasswordpg);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHostpg}:${config.dbPortpg}/${config.dbNamepg}`;

const sequelize = new Sequelize(URI, {
  dialect: "postgres",
  logging: false,
});

setupModels(sequelize);
sequelize.sync(); // es utilizado para sincronizar la estructura de la base de datos con los modelos definidos en Sequelize

module.exports = sequelize;
