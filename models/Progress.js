const { Model, DataTypes, Sequelize } = require('sequelize');

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
    // level_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'level',
    //     key: 'id'
    //   }
    // },
    // question_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'questions',
    //     key: 'id'
    //   }
    // },
    isAnswerCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: false
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
    modelName: 'progress',
  }
);

module.exports = Progress;
