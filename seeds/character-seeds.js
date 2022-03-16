const { Character } = require('../models');

const characterData = [
  {
    name: 'Captain'
  },
  {
    name: 'Engineer'
  },
  {
    name: 'Pilot'
  },
  {
    name: 'Gunner'
  },
];

const seedCharacter = () => Character.bulkCreate(characterData);

module.exports = seedCharacter;