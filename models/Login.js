// MAYBE use this to track who is logged in for multiplayer in the future?

// const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
// const sequelize = require('../config/connection');

// // create our Login model
// class Login extends Model {
//   // set up method to run on instance data (per user) to check password
//   checkPassword(loginPw) {
//     return bcrypt.compareSync(loginPw, this.password);
//   }
// }

// // create fields/columns for Login model
// Login.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'user',
//         key: 'id'
//       }
//     },
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [4]
//       }
//     },
//     createdAt: {
//       type: Datetime.Now
//     }
//   },
//   {
//     hooks: {
//       // set up beforeCreate lifecycle "hook" functionality
//       async beforeCreate(newLoginData) {
//         newLoginData.password = await bcrypt.hash(newLoginData.password, 10);
//         return newLoginData;
//       },

//       async beforeUpdate(updatedLoginData) {
//         updatedLoginData.password = await bcrypt.hash(updatedLoginData.password, 10);
//         return updatedLoginData;
//       }
//     },
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'login'
//   }
// );

// module.exports = Login;
