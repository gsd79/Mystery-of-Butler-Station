const { StarWarsQs } = require('../models');

const starWarsData = [
  {
    question: "What is Baby Yoda's real name?",
    choices: 'Grogu, Mando, Moff Gideon, Yoshi',
    answer: 'Grogu'
  },
  {
    question: "What is the name of Han Solo's ship?",
    choices: 'USS Enterprise, The Millennium Falcon, The Challenger, Elysium',
    answer: 'The Millennium Falcon'
  },
  {
    question: 'Han Solo was frozen in what?',
    choices: 'Carbonite, Ice, Stone, Silver',
    answer: 'Carbonite'
  },
  {
    question: 'Per Yoda, what is the path to the dark side?',
    choices: 'Apathy, Anger, Fear, Malice',
    answer: 'Fear'
  },
  {
    question: 'What species is Chewbacca?',
    choices: 'Ewok, Jawa, Human, Wookiee',
    answer: 'Wookiee'
  },
  {
    question: 'C-3PO is fluent in over how many forms of communication?',
    choices: 'Over Six Million, Just Under One Thousand, Seventeen, Over Ten Million',
    answer: 'Over Six Million'
  },
  {
    question: "Who was Boba Fett's father?",
    choices: 'Jango Fett, Bubba Fett, Obi Fett, Darth Vader',
    answer: 'Jango Fett'
  },
  {
    question: "What was Galen Erso's nickname for his daughter?",
    choices: 'Princess, Stardust, Precious, Nova',
    answer: 'Stardust'
  },
  {
    question: 'Who does Obi-Wan say was the “Chosen One”?',
    choices: 'Luke, Leia, Anakin, Kylo Ren',
    answer: 'Anakin'
  },
  {
    question: 'Lightsabers are powered by what type of crystal?',
    choices: 'Kypher Crystal, Kyber Crystal, Kylen Crystal, Kyvert Crystal',
    answer: 'Kyber Crystal'
  },
  {
    question: "Who is Darth Vader's grandson?",
    choices: 'Rey Skywalker, Luke Skywalker, Kylo Ren, Poe Dameron',
    answer: 'Kylo Ren'
  },
  {
    question: 'q1',
    choices: 'choice 1, choice 2, choice 3, choice 4',
    answer: 'choice 1'
  },
  {
    question: 'q1',
    choices: 'choice 1, choice 2, choice 3, choice 4',
    answer: 'choice 1'
  },
  {
    question: 'q1',
    choices: 'choice 1, choice 2, choice 3, choice 4',
    answer: 'choice 1'
  },
  {
    question: 'q1',
    choices: 'choice 1, choice 2, choice 3, choice 4',
    answer: 'choice 1'
  },
  {
    question: 'q1',
    choices: 'choice 1, choice 2, choice 3, choice 4',
    answer: 'choice 1'
  },
  {
    question: 'q1',
    choices: 'choice 1, choice 2, choice 3, choice 4',
    answer: 'choice 1'
  },
  {
    question: 'q1',
    choices: 'choice 1, choice 2, choice 3, choice 4',
    answer: 'choice 1'
  },
  {
    question: 'q1',
    choices: 'choice 1, choice 2, choice 3, choice 4',
    answer: 'choice 1'
  },
  {
    question: 'q1',
    choices: 'choice 1, choice 2, choice 3, choice 4',
    answer: 'choice 1'
  },
];

const seedStarWarsQs = () => StarWarsQs.bulkCreate(starWarsData);

module.exports = seedStarWarsQs;