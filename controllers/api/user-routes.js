const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth'); //TODO add for production turn in

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

// log in route
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(userData => {
    if (!userData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }
// TODO: ask matt about res.json
    req.session.save(() => {
      req.session.user_id = userData.id //TODO this needs to be +1;
      req.session.email = userData.email;
      req.session.loggedIn = true;
      res.json({ user: userData, message: 'You are now logged in!' }
      );
    });
    console.log(req.session.user_id) //this will show user id of whoever is logging in
  });
});

//GET all users
router.get('/', (req, res) => {
  User.findAll({
    
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// WHEN PLAYER CHOOSES POST WHICH CHARACTER TO CHARACTER MODEL -- LINKED TO USER

router.post('/character-selection', (req, res) => {
  //TODO check the session
    User.update(
      {
      character_id: req.body.character_id,
      }, 
      {
        where: {
          id: req.session.user_id
        }
      })
      .then(dbUserData =>
        {
          // res.json(dbUserData)
          if(!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' })
          } else {
              return res.json('Successfully Updated User Character')
          };
        }
        )
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  // }
});

module.exports = router;