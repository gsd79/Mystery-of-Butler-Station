const Categories = require('./Categories');
const Leaderboard = require('./Leaderboard');
const Level = require('./Level');
// const Login = require('./Login');
const Progress = require('./Progress');
const Questions = require('./Questions');
const User = require('./User');
const Backpack = require('./Backpack');
const Character = require('./Character')

// Associations

Backpack.belongsTo(User,{
  foreignKey: 'user_id'
});

User.hasOne(Backpack,{
  foreignKey:'user_id'
});

Questions.belongsTo(Categories,{
  foreignKey: 'category_id'
});

Categories.hasMany(Questions, {
  foreignKey: 'category_id'
});

//not sure if we need this one or if it should be through Progress (no FK in progress for leaderboard or vice versa)
// Leaderboard.belongsToMany(User, {
//   through: Progress,
//   as: 'level_id',
//   foreignKey: 'user_id'
// });

User.hasOne(Leaderboard, {
    foreignKey: 'user_id'
});

//not sure about this one either
// Progress.belongsToMany(User, {
//   through: Leaderboard,
//   as: '?_id',
//   foreignKey: 'user_id'
// });

User.hasMany(Progress, {
  foreignKey: 'user_id'
})

//no idea
// Progress.belongsToMany(Level, {
//   through: User, 
//   as: 'user_id',
//   foreignKey: 'level_id'
// })

Level.hasMany(Progress, {
  foreignKey: 'level_id'
})

// Progress.belongsToMany(Questions, {
//   through: User,
//   as: 'user_id',
//   foreignKey: 'question_id'
// })

Questions.hasMany(Progress, {
  foreignKey: 'question_id'
})

User.belongsTo(Character, {
  foreignKey: 'character_id'
})

Character.hasMany(User, {
  foreignKey: 'character_id'
})


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
