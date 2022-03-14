const { Questions } = require('../models');

const questionData = [
  {
    question: "What is Baby Yoda's real name?",
    choices: 'Grogu, Mando, Moff Gideon, Yoshi',
    answer: 'Grogu',
    category_id: 1
  },
  {
    question: "What is the name of Han Solo's ship?",
    choices: 'USS Enterprise, The Millennium Falcon, The Challenger, Elysium',
    answer: 'The Millennium Falcon',
    category_id: 1
  },
  {
    question: 'Han Solo was frozen in what?',
    choices: 'Carbonite, Ice, Stone, Silver',
    answer: 'Carbonite',
    category_id: 1
  },
  {
    question: 'Per Yoda, what is the path to the dark side?',
    choices: 'Apathy, Anger, Fear, Malice',
    answer: 'Fear',
    category_id: 1
  },
  {
    question: 'What species is Chewbacca?',
    choices: 'Ewok, Jawa, Human, Wookiee',
    answer: 'Wookiee',
    category_id: 1
  },
  {
    question: 'C-3PO is fluent in over how many forms of communication?',
    choices: 'Over Six Million, Just Under One Thousand, Seventeen, Over Ten Million',
    answer: 'Over Six Million',
    category_id: 1
  },
  {
    question: "Who was Boba Fett's father?",
    choices: 'Jango Fett, Bubba Fett, Obi Fett, Darth Vader',
    answer: 'Jango Fett',
    category_id: 1
  },
  {
    question: "What was Galen Erso's nickname for his daughter?",
    choices: 'Princess, Stardust, Precious, Nova',
    answer: 'Stardust',
    category_id: 1
  },
  {
    question: 'Who does Obi-Wan say was the “Chosen One”?',
    choices: 'Luke, Leia, Anakin, Kylo Ren',
    answer: 'Anakin',
    category_id: 1
  },
  {
    question: 'Lightsabers are powered by what type of crystal?',
    choices: 'Kypher Crystal, Kyber Crystal, Kylen Crystal, Kyvert Crystal',
    answer: 'Kyber Crystal',
    category_id: 1
  },
  {
    question: "Who is Darth Vader's grandson?",
    choices: 'Rey Skywalker, Luke Skywalker, Kylo Ren, Poe Dameron',
    answer: 'Kylo Ren',
    category_id: 1
  },
  {
    question: 'What episode is Return of the Jedi?',
    choices: 'V, VI, IV, VII',
    answer: 'VI',
    category_id: 1
  },
  {
    question: 'Jyn Erso said rebellions are built on what?',
    choices: 'Rebellion, Friendship, Hope, Love',
    answer: 'Hope',
    category_id: 1
  },
  {
    question: 'Legend describes what as the hidden world of the Sith?',
    choices: 'Hoth, Exegol, Geonosis, Tatooine',
    answer: 'Exegol',
    category_id: 1
  },
  {
    question: "What was Mando's weapon against Moff Gideon's darksaber?",
    choices: 'A Beskar Spear, A Beskar Sword, A Beskar Mace, A Beskar Halberd',
    answer: 'A Beskar Spear',
    category_id: 1
  },
  {
    question: "What was Poe Dameron's old job before becoming a pilot?",
    choices: 'A Spice Runner, A Bartender, A Mining Officer, A Drifter',
    answer: 'A Spice Runner',
    category_id: 1
  },
  {
    question: 'Cobb Vanth had whose armor in The Mandalorian?',
    choices: 'Boba Fett, Jango Fett, The Mandalorian, Fennec Shand',
    answer: 'Boba Fett',
    category_id: 1
  },
  {
    question: 'C-3PO is mechanically incapable of speaking translations from who?',
    choices: 'The Dark Ones, Wookiee, Jabbas, The Sith',
    answer: 'The Sith',
    category_id: 1
  },
  {
    question: "Who famously said, These aren't the droids you're looking for?",
    choices: 'Princess Leia, Obi-Wan, Luke Skywalker, Qui-Gon Jinn',
    answer: 'Obi-Wan',
    category_id: 1
  },
  {
    question: 'Rey and Kylo are a what ___ in the Force?',
    choices: 'A dryad in the Force, A dyiid in the Force, A dyad in the Force, A duo in the Force',
    answer: 'A dyad in the Force',
    category_id: 1
  },
  {
    question: "What is Captain Kirk's middle name?",
    choices: 'Troy, Timmy, Tiberius, Tron',
    answer: 'Tiberius',
    category_id: 2
  },
  {
    question: "Spock's parents were different species. What were they?",
    choices: 'Klingon/Human, Romulan/Human, Romulan/Vulcan, Vulcan/Human',
    answer: 'Vulcan/Human',
    category_id: 2
  },
  {
    question: "What is Captain Kirk's nickname for Dr. McCoy?",
    choices: 'Doc, McCoy, Bones, Brainiac',
    answer: 'Bones',
    category_id: 2
  },
  {
    question: "What three colors are the uniforms on Star Trek?",
    choices: 'Yellow/Blue/Green, Purple/Blue/Red, Black/Gold/Red, Gold/Blue/Red',
    answer: 'Gold/Blue/Red',
    category_id: 2
  },
  {
    question: 'How many years did the original Star Trek series air on televison?',
    choices: '3, 10, 8, 1',
    answer: '3',
    category_id: 2
  },
  {
    question: 'Where on planet Earth did Captain Kirk grow up?',
    choices: 'New York, Texas, Iowa, Colorado',
    answer: 'Iowa',
    category_id: 2
  },
  {
    question: "What is Lt. Uhura's first name?",
    choices: 'Gamora, Penda, Nyota, Kadhira',
    answer: 'Nyota',
    category_id: 2
  },
  {
    question: 'Which character was the only one who appeared in both pilot episodes of the original series?',
    choices: 'Cpt. Kirk, Sulu, Spock, Scotty',
    answer: 'Spock',
    category_id: 2
  },
  {
    question: 'What saying is Spock famous for saying?',
    choices: 'Live free die hard, Live long and prosper, You only live once, To infinity and beyond',
    answer: 'Live long and prosper',
    category_id: 2
  },
  {
    question: 'What is the name of the ship piloted by Captain Kirk and his crew?',
    choices: 'Enterprise, Endeavor, Excalibur, Reliant ',
    answer: 'Enterprise',
    category_id: 2
  },
  {
    question: 'What year did the first episode of the original Star Trek series air? ',
    choices: '1961, 1972, 1966, 1978',
    answer: '1966',
    category_id: 2
  },
  {
    question: 'What catchphrase did Dr. McCoy mention 20 times during the airing of the original series?',
    choices: "Damn it Jim I'm a Dr. not a bricklayer, He's dead Jim, Beam me up Scotty, We're not in Kansas anymore",
    answer: "He's dead Jim",
    category_id: 2
  },
  {
    question: 'According to a popular fan theory, what color shirt do people usually wear when they die in an episode?',
    choices: 'Black, Gold, Blue, Red',
    answer: 'Red',
    category_id: 2
  },
  {
    question: 'Who played Captain Jean-Luc Picard in Star Wars: The Next Generation?',
    choices: 'Ian McKellen, Richard Harris, William Shatner, Patrick Stewart',
    answer: 'Patrick Stewart',
    category_id: 2
  },
  {
    question: 'What is the name for the deep-space exploration division of the United Federation of Planets?',
    choices: 'Space Force, Starfleet, Kesslers, The Empire',
    answer: 'Starfleet',
    category_id: 2
  },
  {
    question: "Who is Captain Kirk's immediate predecessor?",
    choices: 'Christopher Pike, Buzz Aldrin, Bill Nye, Jean-Luc Picard ',
    answer: 'Christopher Pike',
    category_id: 2
  },
  {
    question: 'What device is used to beam people up to the ship?',
    choices: 'Holodeck, Transporter, Replicator, Pixilator',
    answer: 'Transporter',
    category_id: 2
  },
  {
    question: 'How many episodes were in the first season of the original Star Trek series?',
    choices: '29, 14, 7, 21',
    answer: '29',
    category_id: 2
  },
  {
    question: 'What century does the original Star Trek series take place?',
    choices: '22nd, 24th, 27th, 23rd',
    answer: '23rd',
    category_id: 2
  },
  {
    question: 'What actor plays Captain Kirk in the original series?',
    choices: 'William Shatner, Patrick Stewart, Gregory Peck, Gene Kelly',
    answer: 'William Shatner',
    category_id: 2
  },
  {
    question: 'Which is the smallest planet within our solar system?',
    choices: 'Earth, Uranus, Mercury, Venus',
    answer: 'Mercury',
    category_id: 3
  },
  {
    question: 'The moon named Titan orbits which planet?',
    choices: 'Jupiter, Saturn, Mars, Neptune',
    answer: 'Saturn',
    category_id: 3
  },
  {
    question: 'What is the brightest planet in the night sky?',
    choices: 'Mars, Mercury, Saturn, Venus',
    answer: 'Venus',
    category_id: 3
  },
  {
    question: 'There have been more missions to this planet versus other planets',
    choices: 'Venus, Uranus, Mars, Mercury',
    answer: 'Mars',
    category_id: 3
  },
  {
    question: 'How many planets can be seen with the naked eye?',
    choices: '1, 2, 3, 5',
    answer: '5',
    category_id: 3
  },
  {
    question: 'What is the most common type of galaxy in the universe?',
    choices: 'Elliptical, Spherical, Spiral, Irregular',
    answer: 'Elliptical',
    category_id: 3
  },
  {
    question: 'Which NASA flight was the last manned mission to the moon?',
    choices: 'Apollo 17, Endeavor, CAPSTONE, Luna 25',
    answer: 'Apollo 17',
    category_id: 3
  },
  {
    question: 'What is the longest contiuous time a human has spent in space?',
    choices: '632 days, 366 days, 437 days, 517 days',
    answer: '437 days',
    category_id: 3
  },
  {
    question: 'What is the shortest space flight?',
    choices: '12.5 minutes, 15 minutes, 25 minutes, 31 minutes',
    answer: '15 minutes',
    category_id: 3
  },
  {
    question: 'How many moons are in our solar system?',
    choices: '50, 78, 157, 181',
    answer: '181',
    category_id: 3
  },
  {
    question: 'How many moons does Jupiter have?',
    choices: '4, 21, 67, 75',
    answer: '67',
    category_id: 3
  },
  {
    question: 'What is the furthest planet from the sun?',
    choices: 'Mercury, Saturn, Uranus, Neptune',
    answer: 'Neptune',
    category_id: 3
  },
  {
    question: 'How many stars make up the Big Dipper constellation?',
    choices: '4, 6, 7, 8',
    answer: '7',
    category_id: 3
  },
  {
    question: 'How many named constellations exist in our solar system?',
    choices: '115, 88, 65, 21',
    answer: '88',
    category_id: 3
  },
  {
    question: 'What is the Earth equivelant to one season on Neptune?',
    choices: '2 years, 18 years, 29 years, 40 years',
    answer: '40 years',
    category_id: 3
  },
  {
    question: 'Which ancient civilization originated astronomy?',
    choices: 'Greeks, Romans, Egyptians, Chinese',
    answer: 'Greeks',
    category_id: 3
  },
  {
    question: 'Which planet rotates on its side?',
    choices: 'Saturn, Jupiter, Venus, Uranus',
    answer: 'Uranus',
    category_id: 3
  },
  {
    question: 'What year did Pluto become reclassified as a dwarf planet?',
    choices: '2001, 2004, 2006, 2009',
    answer: '2004',
    category_id: 3
  },
  {
    question: 'In addition to Pluto, name one of the 5 most recognized dwarf planets',
    choices: 'Io, Ganymede, Makemake, Luna',
    answer: 'Makemake',
    category_id: 3
  },
  {
    question: 'Who is the first person to walk on the moon?',
    choices: 'Yuri Gagarin, Buzz Aldrin, Neil Armstrong, Lance Armstrong',
    answer: 'Neil Armstrong',
    category_id: 3
  }
];

const seedQuestions = () => Questions.bulkCreate(questionData);

module.exports = seedQuestions;