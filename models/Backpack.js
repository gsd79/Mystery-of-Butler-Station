const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../config/connection');

class Backpack extends Model {}

Backpack.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    item: {
      type: DataTypes.BOOLEAN
    },
    createdAt: {
      type: Sequelize.DATE
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'backpack',
  }
);

module.exports = Backpack;