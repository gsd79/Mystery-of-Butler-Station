const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Level extends Model {}

Level.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    level: { //TODO should this be category_id instead? ref category?
      type: DataTypes.STRING,
      allowNull: false,
    },
    questions: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'level',
  }
);

module.exports = Level;
