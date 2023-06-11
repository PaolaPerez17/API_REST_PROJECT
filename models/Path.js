const { DataTypes, Model, Sequelize } = require("sequelize");
const { IssueModel } = require("./Issue");
const Path_table = "Path";

const Path = {
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
class PathModel extends Model {
  static associate(models) {
    PathModel.hasMany(models.IssueModel, {
      foreignKey: "id_path_issu",
      sourceKey: "id",
    });
  }

  static associate(models) {
    IssueModel.belongsTo(models.PathModel, {
      foreignKey: "id_path_issu",
      targetKey: "id",
    });
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

module.exports = { Path, Path_table, PathModel };
