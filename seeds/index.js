//require all seed js files (based off models)

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  //below are example seeds from E-commerce 

  // await seedCategories();
  // console.log('\n----- CATEGORIES SEEDED -----\n');

  // await seedProducts();
  // console.log('\n----- PRODUCTS SEEDED -----\n');

  // await seedTags();
  // console.log('\n----- TAGS SEEDED -----\n');

  // await seedProductTags();
  // console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();