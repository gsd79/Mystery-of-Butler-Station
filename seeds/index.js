//require all seed js files (based off models)
const seedCategories = require('./categories-seeds');
const seedLevels = require('./level-seeds');
const seedQuestions = require('./questions-seeds');

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

  process.exit(0);
};

seedAll();