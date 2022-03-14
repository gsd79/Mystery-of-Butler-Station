const router = require('express').Router();
const { User } = require('../../models');


// log in route
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(userLogIn => {
    if (!userLogIn) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = userLogin.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    res.json({ user: userLogIn, message: 'You are now logged in!' });
  });
});

module.exports = router;