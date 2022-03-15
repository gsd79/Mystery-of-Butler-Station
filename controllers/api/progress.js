const router = require('express').Router();
const { Progress } = require('../../models');
const withAuth = require('../../utils/auth'); //TODO add for production turn in

//GET all progress 
router.get('/', (req, res) => {
  Progress.findAll({
    
  })
    .then(dbProgressData => res.json(dbProgressData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST ROUTE TO KEEP TRACK OF NUMBER OF QUESTIONS ANSWERED CORRECTLY (IF 3 CORRECT, THEN GIVE CLUE AND KEY)
router.post('/', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  Progress.create({
    user_id: req.body.user_id,
    level_id: req.body.level_id,
    question_id: req.body.question_id,
    isAnswerCorrect: req.body.isAnswerCorrect
  })
    .then(dbProgressData => res.json(dbProgressData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
    //TODO should i think about using session here? .then(dbProgressData => {
    //   req.session.save(() => {
    //     req.session.user_id = dbUserData.id;
    //     req.session.username = dbUserData.username;
    //     req.session.loggedIn = true;
  
    //     res.json(dbUserData);
    //   });
    // })
});


module.exports = router;