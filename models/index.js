const { manager, Manager } = require("./Manager");
const { issue, Issue } = require("./Issue");

function setupModels(sequelize) {
  manager.init(Manager, manager.config(sequelize));
  issue.init(Issue, issue.config(sequelize));
}

module.exports = setupModels;
