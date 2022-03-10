const { SpaceQs } = require('../models');

const spaceData = [
  {
    question: 'q1',
    choices: 'choice 1, choice 2, choice 3, choice 4',
    answer: 'choice 1'
  },
];

const seedSpaceQs = () => SpaceQs.bulkCreate(spaceData);

module.exports = seedSpaceQs;