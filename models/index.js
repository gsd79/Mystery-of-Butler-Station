// import all models
const SpaceQs = require('./Space-Qs');
const StarWarsQs = require('./StarWars-Qs');
const StarTrekQs = require('./StarTrek-Qs');

//example: const Post = require('./Post');


// create associations

//ex: User.hasMany(Post, {
//   foreignKey: 'user_id'
// });

module.exports = { 
  SpaceQs,
  StarTrekQs,
  StarWarsQs
};
