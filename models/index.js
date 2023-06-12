const { Manager, ManagerShema } = require("./Manager");
const { Path, PathShema } = require("./Path");
const { Issue, IssueShema } = require("./Issue");
const { Studen, StudenShema } = require("./Studen");

function setupModels(sequelize) {
  Manager.init(ManagerShema, Manager.config(sequelize));
  Path.init(PathShema, Path.config(sequelize));
  Issue.init(IssueShema, Issue.config(sequelize));
  Studen.init(StudenShema, Studen.config(sequelize));

  Manager.associate(sequelize.models);
  Path.associate(sequelize.models);
}

module.exports = setupModels;
