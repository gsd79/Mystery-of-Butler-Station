const { StarTrekQs } = require('../models');

const starTrekData = [
  {
    question: 'q1',
    choices: 'choice 1, choice 2, choice 3, choice 4',
    answer: 'choice 1'
  },
];

const seedStarTrekQs = () => StarTrekQs.bulkCreate(starTrekData);

module.exports = seedStarTrekQs;