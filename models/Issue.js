const { Model, DataTypes, Sequelize } = require("sequelize");
const issue_table = "issue";

const Issue = {
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

class IssueModel extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: issue_table,
      modelName: "Issue",
      timestamps: false,
    };
  }
}
module.exports = { IssueModel, issue_table, Issue };
