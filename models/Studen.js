const { DataTypes } = require("sequelize");
const sequelize = require("../database/Conexion_db");
const Path = require("./Path");
const Squad = require("./Squad");

const Studen = sequelize.define(
  "Studen",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      validate: {
        len: [0, 10],
      },
    },
    name: {
      type: DataTypes.STRING,
    },
    Lastname: {
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.STRING,
    },
    Brithdate: {
      type: DataTypes.DATE,
    },
    Password: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

Studen.belongsToMany(Path,{ through: Squad})
Path.belongsToMany(Studen,{through: Squad})

module.exports = Studen;
