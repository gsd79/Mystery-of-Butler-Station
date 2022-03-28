const router = require('express').Router();
const { Questions } = require('../../models');
const withAuth = require('../../utils/auth'); //TODO add for production turn in

//GET ROUTE TO GENERATE QUESTION, STORED IN VARIABLES 
router.get('/', withAuth, (req, res) => {
  Questions.findAll({
    
  })
    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get question by id
router.get('/:id', withAuth, (req, res) => {
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
});

module.exports = router;