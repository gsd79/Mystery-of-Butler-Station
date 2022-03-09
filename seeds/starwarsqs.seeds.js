const { StarWarsQs } = require('../models');

const starWarsData = [
  {
    question: 'q1',
    choices: 'choice 1, choice 2, choice 3, choice 4',
    answer: 'choice 1'
  },
];

const seedStarWarsQs = () => StarWarsQs.bulkCreate(starWarsData);

module.exports = seedStarWarsQs;