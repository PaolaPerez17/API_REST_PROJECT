const { IssueModel, Issue } = require("./Issue");
const { ManagerModel, Manager } = require("./Manager");
const { PathModel, Path } = require("./Path");
const { SquadModel, Squad } = require("./Squad");
const { StudenModel, Studen } = require("./Studen");

function setupModels(sequelize) {
  IssueModel.init(Issue, IssueModel.config(sequelize));
  ManagerModel.init(Manager, ManagerModel.config(sequelize));
  PathModel.init(Path, PathModel.config(sequelize));
  SquadModel.init(Squad, SquadModel.config(sequelize));
  StudenModel.init(Studen, StudenModel.config(sequelize));
}

module.exports = setupModels;
