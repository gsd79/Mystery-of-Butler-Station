//require all seed js files (based off models)
const seedSpaceQs = require('./spaceqs-seeds');
const seedStarWarsQs = require('./starwarsqs.seeds');
const seedStarTrekQs = require('./startrekqs.seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedSpaceQs();
  console.log('\n----- SPACE QUESTIONS SEEDED -----\n');

  await seedStarWarsQs();
  console.log('\n----- STARWARS QUESTIONS SEEDED -----\n');

  await seedStarTrekQs();
  console.log('\n----- STARTREKQUESTIONS SEEDED -----\n');

  process.exit(0);
};

seedAll();