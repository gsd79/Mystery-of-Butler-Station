const { Progress } = require('../models');

const progressData = [
  {
    user_id: 1,
    level_id: 1,
    question_id: 1,
    isAnswerCorrect: true,
    createdAt: '1970-01-01 00:00:01'
  },
  {
    user_id: 1,
    level_id: 1,
    question_id: 2,
    isAnswerCorrect: true,
    createdAt: '1970-01-01 00:00:01'
  },
  {
    user_id: 1,
    level_id: 1,
    question_id: 3,
    isAnswerCorrect: true,
    createdAt: '1970-01-01 00:00:01'
  },
  {
    user_id: 1,
    level_id: 1,
    question_id: 4,
    isAnswerCorrect: false,
    createdAt: '1970-01-01 00:00:01'
  },
];

const seedProgress = () => Progress.bulkCreate(progressData);

module.exports = seedProgress;