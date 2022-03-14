const { Leaderboard } = require('../models');

const leaderboardData = [
  {
    user_id: 1,
    score: 5,
    createdAt: '1970-01-01 00:00:01'
  },
  {
    user_id: 2,
    score: 300,
    createdAt: '1970-01-01 00:00:01'
  },
];

const seedLeaderboard = () => Leaderboard.bulkCreate(leaderboardData);

module.exports = seedLeaderboard;