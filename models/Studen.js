const { DataTypes, Model } = require("sequelize");

const { PathModel } = require("./Path");
const { SquadModel } = require("./Squad");

const studen_table = "Studen"

const Studen = {
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
};

class StudenModel extends Model {
  static associate(models) {
    StudenModel.belongsToMany(models.PathModel, { through: SquadModel });
  }
  static associate(models) {
    PathModel.belongsToMany(models.StudenModel, { through: SquadModel });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: studen_table,
      modelName: "Studen",
      timestamps: false
    }
  }
}

module.exports = {Studen, studen_table, StudenModel};
