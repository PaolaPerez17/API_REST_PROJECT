const { Model, DataTypes, Sequelize } = require("sequelize");
const { PathModel } = require("./Path");

const manager_table = "manager";
const Manager = {
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

class ManagerModel extends Model {
  static associate(models) {
    ManagerModel.hasMany(models.PathModel, {
      foreignKey: "id_mang_path",
      sourceKey: "id",
    });
  }
  static associate(models) {
    PathModel.belongsTo(models.ManagerModel, {
      foreignKey: "id_mang_path",
      targetKey: "id",
    });
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

module.exports = { manager_table, ManagerModel, Manager };
