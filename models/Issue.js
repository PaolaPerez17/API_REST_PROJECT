const { Model, DataTypes, Sequelize } = require("sequelize");
// const {PathModel} = require("./Path")
const issue_table = "Issue";

const IssueShema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  completed: {
    type: DataTypes.BOOLEAN,
  },
  finish_date: {
    type: DataTypes.DATE,
  },
  content: {
    type: DataTypes.STRING,
  },
};

class Issue extends Model {
  static associate(models) {
    Issue.belongsTo(models.Path, { foreignKey: "id_pathiss" });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: issue_table,
      modelName: "Issue",
      timestamps: false,
    };
  }
}
module.exports = { IssueShema, issue_table, Issue };
