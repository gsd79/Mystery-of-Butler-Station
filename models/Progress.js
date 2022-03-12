const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Progress extends Model {}

Progress.init(
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
    level: {
      type: DataTypes.INTEGER,
      references: {
        model: 'level',
        key: 'id'
      }
    },
    question: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    //TODO createdAt and updatedAt... i remember Matt saying something about these... Maybe Qing can help? how to use and why?
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'progress',
  }
);

module.exports = Progress;
