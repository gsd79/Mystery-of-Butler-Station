const { SpaceQs } = require('../models');

const spaceData = [
  {
    question: 'Which is the smallest planet within our solar system?',
    choices: 'Earth, Uranus, Mercury, Venus',
    answer: 'Mercury'
  },
  {
    question: 'The moon named Titan orbits which planet?',
    choices: 'Jupiter, Saturn, Mars, Neptune',
    answer: 'Saturn'
  },
  {
    question: 'What is the brightest planet in the night sky?',
    choices: 'Mars, Mercury, Saturn, Venus',
    answer: 'Venus'
  },
  {
    question: 'There have been more missions to this planet versus other planets',
    choices: 'Venus, Uranus, Mars, Mercury',
    answer: 'Mars'
  },
  {
    question: 'How many planets can be seen with the naked eye?',
    choices: '1, 2, 3, 5',
    answer: '5'
  },
  {
    question: 'What is the most common type of galaxy in the universe?',
    choices: 'Elliptical, Spherical, Spiral, Irregular',
    answer: 'Elliptical'
  },
  {
    question: 'Which NASA flight was the last manned mission to the moon?',
    choices: 'Apollo 17, Endeavor, CAPSTONE, Luna 25',
    answer: 'Apollo 17'
  },
  {
    question: 'What is the longest contiuous time a human has spent in space?',
    choices: '632 days, 366 days, 437 days, 517 days',
    answer: '437 days'
  },
  {
    question: 'What is the shortest space flight?',
    choices: '12.5 minutes, 15 minutes, 25 minutes, 31 minutes',
    answer: '15 minutes'
  },
  {
    question: 'How many moons are in our solar system?',
    choices: '50, 78, 157, 181',
    answer: '181'
  },
  {
    question: 'How many moons does Jupiter have?',
    choices: '4, 21, 67, 75',
    answer: '67'
  },
  {
    question: 'What is the furthest planet from the sun?',
    choices: 'Mercury, Saturn, Uranus, Neptune',
    answer: 'Neptune'
  },
  {
    question: 'How many stars make up the Big Dipper constellation?',
    choices: '4, 6, 7, 8',
    answer: '7'
  },
  {
    question: 'How many named constellations exist in our solar system?',
    choices: '115, 88, 65, 21',
    answer: '88'
  },
  {
    question: 'What is the Earth equivelant to one season on Neptune?',
    choices: '2 years, 18 years, 29 years, 40 years',
    answer: '40 years'
  },
  {
    question: 'Which ancient civilization originated astronomy?',
    choices: 'Greeks, Romans, Egyptians, Chinese',
    answer: 'Greeks'
  },
  {
    question: 'Which planet rotates on its side?',
    choices: 'Saturn, Jupiter, Venus, Uranus',
    answer: 'Uranus'
  },
  {
    question: 'What year did Pluto become reclassified as a dwarf planet?',
    choices: '2001, 2004, 2006, 2009',
    answer: '2004'
  },
  {
    question: 'In addition to Pluto, name one of the 5 most recognized dwarf planets',
    choices: 'Io, Ganymede, Makemake, Luna',
    answer: 'Makemake'
  },
  {
    question: 'Who is the first person to walk on the moon?',
    choices: 'Yuri Gagarin, Buzz Aldrin, Neil Armstrong, Lance Armstrong',
    answer: 'Neil Armstrong'
  },
];

const seedSpaceQs = () => SpaceQs.bulkCreate(spaceData);

module.exports = seedSpaceQs;