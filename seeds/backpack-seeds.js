const { Backpack } = require('../models');

const backpackData = [
  {
    user_id: 1,
    item: false,
    createdAt: '1970-01-01 00:00:01'
  },
  {
    user_id: 2,
    item: true,
    createdAt: '1970-01-01 00:00:01'
  },
];

const seedBackpack = () => Backpack.bulkCreate(backpackData);

module.exports = seedBackpack;