const { User } = require('../models');

const userData = [
  {
    name: 'Daniel Zim',
    email: 'hello@gmail.com',
    password: '$2b$10$.oFmJw7hlsDwrDDP0wYLf.rDYuxAbgZCFWlcpgSZYX1d885CVxo8S', //this is 12345
    gender: 'M',
    age: 28,
    character_id: 1,
    createdAt: '1970-01-01 00:00:01'
    
  },
  {
    name: 'Hayley Zim',
    email: 'hello123@gmail.com',
    password: '$2b$10$.oFmJw7hlsDwrDDP0wYLf.rDYuxAbgZCFWlcpgSZYX1d885CVxo8S', //this is 12345
    gender: 'F',
    age: 25,
    createdAt: '1970-01-01 00:00:01'
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;