const { DataTypes, Model } = require("sequelize");


const squad_table = "Squad"

const Squad = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
};

class SquadModel extends Model {
  static associate() {}
  static config(sequelize){
    return {
      sequelize,
      tableName: squad_table,
      modelName: "Squad",
      timestamps: false
    }
  }
}

module.exports = {squad_table, Squad, SquadModel};
