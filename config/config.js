require("dotenv").config();

const config = {
  port: process.env.PORT || 3000,
  dbNamepg: process.env.NAME_DB,
  dbUserpg: process.env.USER_DB,
  dbPasswordpg: process.env.PASSWORD_DB,
  dbPortpg: process.env.PG_PORT,
  dbHostpg: process.env.HOST_DB,
};

module.exports = { config };
