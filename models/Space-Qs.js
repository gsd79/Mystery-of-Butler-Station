const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class SpaceQs extends Model {}

SpaceQs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    choices: {
      type: DataTypes.STRING,
      allowNull: false
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'spaceqs',
  }
);

module.exports = SpaceQs;
