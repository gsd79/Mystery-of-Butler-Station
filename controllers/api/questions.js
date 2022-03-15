const router = require('express').Router();
const { Questions } = require('../../models');
const withAuth = require('../../utils/auth'); //TODO add for production turn in

//GET ROUTE TO GENERATE QUESTION, STORED IN VARIABLES 
router.get('/', (req, res) => {
  Questions.findAll({
    
  })
    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get question by id
router.get('/:id', (req, res) => {
  Questions.findAll({
    where: {
      category_id: req.params.id
    },
  })
  .then(dbQuestionData => {
    if (!dbQuestionData) {
      res.status(404).json({ message: 'No question found with this id' });
      return;
    }
    res.json(dbQuestionData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})
//mark to pass in category 1 2 or 3

// POST ROUTE TO KEEP TRACK OF NUMBER OF QUESTIONS ANSWERED CORRECTLY (IF 3 CORRECT, THEN GIVE CLUE AND KEY)
//in progress?


module.exports = router;