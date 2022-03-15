const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../config/connection');

class Leaderboard extends Model {}

Leaderboard.init(
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
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    modelName: 'leaderboard',
  }
);

module.exports = Leaderboard;
