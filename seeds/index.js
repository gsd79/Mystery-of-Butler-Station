//require all seed js files (based off models)
const seedCategories = require('./categories-seeds');
const seedLevels = require('./level-seeds');
const seedQuestions = require('./questions-seeds');
const seedBackpack = require('./backpack-seeds');
const seedCharacter = require('./character-seeds');
const seedLeaderboard = require('./leaderboard-seeds');
const seedProgress = require('./progress-seeds');
const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedLevels();
  console.log('\n----- LEVELS SEEDED -----\n');

  await seedQuestions();
  console.log('\n----- QUESTIONS SEEDED -----\n');

  await seedCharacter();
  console.log('\n----- CHARACTERS SEEDED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedBackpack();
  console.log('\n----- BACKPACK SEEDED -----\n');

  await seedLeaderboard();
  console.log('\n----- LEADERBOARD SEEDED -----\n');

  await seedProgress();
  console.log('\n----- PROGRESS SEEDED -----\n');

  process.exit(0);
};

seedAll();