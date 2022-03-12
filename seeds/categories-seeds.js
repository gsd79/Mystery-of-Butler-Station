const { Categories } = require('../models');

const categoriesData = [
  {
    category: 'Star Wars'
  },
  {
    category: 'Star Trek'
  },
  {
    category: 'Space'
  }
  
];

const seedCategories = () => Categories.bulkCreate(categoriesData);

module.exports = seedCategories;