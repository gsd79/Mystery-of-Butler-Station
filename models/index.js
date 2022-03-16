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



// create associations

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

Leaderboard.belongsToMany(User, {
  foreignKey: 'user_id'
});

User.hasOne(Leaderboard, {
  foreignKey: 'user_id'
});

Progress.belongsToMany(User, {
  foreignKey: 'user_id'
});

User.hasOne(Progress, {
  foreignKey: 'user_id'
})

Progress.belongsToMany(Level, {
  foreignKey: 'level_id'
})

Level.hasOne(Progress, {
  foreignKey: 'level_id'
})

Progress.belongsToMany(Questions, {
  foreignKey: 'question_id'
})

Questions.hasOne(Progress, {
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
