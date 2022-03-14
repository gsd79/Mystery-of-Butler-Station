const router = require('express').Router();
const { Questions } = require('../../models');

//GET ROUTE TO GENERATE QUESTION, STORED IN VARIABLES 
router.get('/questions/:id', (req, res) => {

})
//mark to pass in category 1 2 or 3

// POST ROUTE TO KEEP TRACK OF NUMBER OF QUESTIONS ANSWERED CORRECTLY (IF 3 CORRECT, THEN GIVE CLUE AND KEY)


module.exports = router;