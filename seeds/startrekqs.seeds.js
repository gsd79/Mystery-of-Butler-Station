const { StarTrekQs } = require('../models');

const starTrekData = [
  {
    question: "What is Captain Kirk's middle name?",
    choices: 'Troy, Timmy, Tiberius, Tron',
    answer: 'Tiberius'
  },
  {
    question: "Spock's parents were different species. What were they?",
    choices: 'Klingon/Human, Romulan/Human, Romulan/Vulcan, Vulcan/Human',
    answer: 'Vulcan/Human'
  },
  {
    question: "What is Captain Kirk's nickname for Dr. McCoy?",
    choices: 'Doc, McCoy, Bones, Brainiac',
    answer: 'Bones'
  },
  {
    question: "What three colors are the uniforms on Star Trek?",
    choices: 'Yellow/Blue/Green, Purple/Blue/Red, Black/Gold/Red, Gold/Blue/Red',
    answer: 'Gold/Blue/Red'
  },
  {
    question: 'How many years did the original Star Trek series air on televison?',
    choices: '3, 10, 8, 1',
    answer: '3'
  },
  {
    question: 'Where on planet Earth did Captain Kirk grow up?',
    choices: 'New York, Texas, Iowa, Colorado',
    answer: 'Iowa'
  },
  {
    question: "What is Lt. Uhura's first name?",
    choices: 'Gamora, Penda, Nyota, Kadhira',
    answer: 'Nyota'
  },
  {
    question: 'Which character was the only one who appeared in both pilot episodes of the original series?',
    choices: 'Cpt. Kirk, Sulu, Spock, Scotty',
    answer: 'Spock'
  },
  {
    question: 'What saying is Spock famous for saying?',
    choices: 'Live free die hard, Live long and prosper, You only live once, To infinity and beyond',
    answer: 'Live long and prosper'
  },
  {
    question: 'What is the name of the ship piloted by Captain Kirk and his crew?',
    choices: 'Enterprise, Endeavor, Excalibur, Reliant ',
    answer: 'Enterprise'
  },
  {
    question: 'What year did the first episode of the original Star Trek series air? ',
    choices: '1961, 1972, 1966, 1978',
    answer: '1966'
  },
  {
    question: 'What catchphrase did Dr. McCoy mention 20 times during the airing of the original series?',
    choices: "Damn it Jim I'm a Dr. not a bricklayer, He's dead Jim, Beam me up Scotty, We're not in Kansas anymore",
    answer: "He's dead Jim"
  },
  {
    question: 'According to a popular fan theory, what color shirt do people usually wear when they die in an episode?',
    choices: 'Black, Gold, Blue, Red',
    answer: 'Red'
  },
  {
    question: 'Who played Captain Jean-Luc Picard in Star Wars: The Next Generation?',
    choices: 'Ian McKellen, Richard Harris, William Shatner, Patrick Stewart',
    answer: 'Patrick Stewart'
  },
  {
    question: 'What is the name for the deep-space exploration division of the United Federation of Planets?',
    choices: 'Space Force, Starfleet, Kesslers, The Empire',
    answer: 'Starfleet'
  },
  {
    question: "Who is Captain Kirk's immediate predecessor?",
    choices: 'Christopher Pike, Buzz Aldrin, Bill Nye, Jean-Luc Picard ',
    answer: 'Christopher Pike'
  },
  {
    question: 'What device is used to beam people up to the ship?',
    choices: 'Holodeck, Transporter, Replicator, Pixilator',
    answer: 'Transporter'
  },
  {
    question: 'How many episodes were in the first season of the original Star Trek series?',
    choices: '29, 14, 7, 21',
    answer: '29'
  },
  {
    question: 'What century does the original Star Trek series take place?',
    choices: '22nd, 24th, 27th, 23rd',
    answer: '23rd'
  },
  {
    question: 'What actor plays Captain Kirk in the original series?',
    choices: 'William Shatner, Patrick Stewart, Gregory Peck, Gene Kelly',
    answer: 'William Shatner'
  },
];

const seedStarTrekQs = () => StarTrekQs.bulkCreate(starTrekData);

module.exports = seedStarTrekQs;