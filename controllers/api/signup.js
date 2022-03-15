const router = require('express').Router();
const { User } = require('../../models');

// sign up route
router.post('/signup', (req, res) => {

  User.create({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender
  })
    .then(userSignUp => {
      res.json(userSignUp);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;