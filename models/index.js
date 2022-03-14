// import all models
const Categories = require('./Categories');
const Leaderboard = require('./Leaderboard');
const Level = require('./Level');
// const Login = require('./Login');
const Progress = require('./Progress');
const Questions = require('./Questions');
const User = require('./User');
const Backpack = require('./Backpack');
const Character = require('./Character')

//example: const Post = require('./Post');


// create associations

//ex: User.hasMany(Post, {
//   foreignKey: 'user_id'
// });

module.exports = { 
  Categories,
  Leaderboard,
  Level,
  // Login,
  Progress,
  Questions,
  User,
  Backpack,
  Character
};
