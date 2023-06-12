const { Model, DataTypes, Sequelize } = require("sequelize");
const { PathModel } = require("./Path");

const manager_table = "Manager";
const ManagerShema = {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
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

class Manager extends Model {
  static associate(models) {
    Manager.hasMany(models.Path, { foreignKey: "id_mangpath" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: manager_table,
      modelName: "Manager",
      timestamps: false,
    };
  }
}

module.exports = { manager_table, Manager, ManagerShema };
