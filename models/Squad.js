const { DataTypes } = require("sequelize");
const sequelize = require("../database/Conexion_db");

const Squad = sequelize.define(
  "squad",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Squad;
