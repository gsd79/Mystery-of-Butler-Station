const { Level } = require('../models');

const levelData = [
  {
    level: 'Star Wars',
    questions: 20
  },
  {
    level: 'Star Trek',
    questions: 20
  },
  {
    level: 'Space',
    questions: 20
  },
  
];

const seedLevels = () => Level.bulkCreate(levelData);

module.exports = seedLevels;