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
    question: 'What episode is Return of the Jedi?',
    choices: 'V, VI, IV, VII',
    answer: 'VI'
  },
  {
    question: 'Jyn Erso said rebellions are built on what?',
    choices: 'Rebellion, Friendship, Hope, Love',
    answer: 'Hope'
  },
  {
    question: 'Legend describes what as the hidden world of the Sith?',
    choices: 'Hoth, Exegol, Geonosis, Tatooine',
    answer: 'Exegol'
  },
  {
    question: "What was Mando's weapon against Moff Gideon's darksaber?",
    choices: 'A Beskar Spear, A Beskar Sword, A Beskar Mace, A Beskar Halberd',
    answer: 'A Beskar Spear'
  },
  {
    question: "What was Poe Dameron's old job before becoming a pilot?",
    choices: 'A Spice Runner, A Bartender, A Mining Officer, A Drifter',
    answer: 'A Spice Runner'
  },
  {
    question: 'Cobb Vanth had whose armor in The Mandalorian?',
    choices: 'Boba Fett, Jango Fett, The Mandalorian, Fennec Shand',
    answer: 'Boba Fett'
  },
  {
    question: 'C-3PO is mechanically incapable of speaking translations from who?',
    choices: 'The Dark Ones, Wookiee, Jabbas, The Sith',
    answer: 'The Sith'
  },
  {
    question: "Who famously said, These aren't the droids you're looking for?",
    choices: 'Princess Leia, Obi-Wan, Luke Skywalker, Qui-Gon Jinn',
    answer: 'Obi-Wan'
  },
  {
    question: 'Rey and Kylo are a what ___ in the Force?',
    choices: 'A dryad in the Force, A dyiid in the Force, A dyad in the Force, A duo in the Force',
    answer: 'A dyad in the Force'
  },
];

const seedStarWarsQs = () => StarWarsQs.bulkCreate(starWarsData);

module.exports = seedStarWarsQs;