const { Model, DataTypes, Sequelize } = require("sequelize");
// const { SquadShema } = require("./Squad");
// const { IssueModel } = require("./Issue");
// const { Manager } = require("./Manager");
// const { SquadModel } = require("./Squad");
// const { StudenModel } = require("./Studen");
const Path_table = "Path";

const PathShema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  Progress: {
    type: DataTypes.INTEGER,
  },
  Start_date: {
    type: DataTypes.DATE,
  },
  Finish_date: {
    type: DataTypes.DATE,
  },
};
class Path extends Model {
  static associate(models) {
    Path.belongsTo(models.Manager, { foreignKey: "id_mangpath" });
    Path.hasMany(models.Issue, { foreignKey: "id_pathiss" });
    Path.belongsToMany(models.Studen, { through: "Squad" });
    // Studen.belongsToMany(models.Path, { through: "Squad" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: Path_table,
      modelName: "Path",
      timestamps: false,
    };
  }
}

module.exports = { Path_table, Path, PathShema };
