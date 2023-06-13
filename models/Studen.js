const { DataTypes, Model } = require("sequelize");

// const { PathModel } = require("./Path");
// const { SquadModel } = require("./Squad");

const studen_table = "Studen";

const StudenShema = {
  id: {
    type: DataTypes.DOUBLE,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  lastname: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  brithdate: {
    type: DataTypes.DATE,
  },
  password: {
    type: DataTypes.STRING,
  },
};

class Studen extends Model {
  static associate(models) {
    Studen.hasMany(models.Path, { foreignKey: 'squad_id' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: studen_table,
      modelName: "Studen",
      timestamps: false,
    };
  }
}

module.exports = { Studen, studen_table, StudenShema };
