const { Model, DataTypes, Sequelize } = require("sequelize");


const manager_table = "Manager";
const ManagerShema = {
  id: {
    primaryKey: true,
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
  },
  lastname: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  brithdate: {
    type: DataTypes.DATE,
  },
  password: {
    type: DataTypes.STRING,
  }
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
