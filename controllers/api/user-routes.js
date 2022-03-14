const router = require('express').Router();
const { User } = require('../../models');

// sign up route
router.post('/', (req, res) => {

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

// TODO: WHEN PLAYER CHOOSES POST WHICH CHARACTER TO CHARACTER MODEL -- LINKED TO USER
// TODO: PUT ROUTE TO NEW GAME/RESET PROGRESS MODEL?
const {User} = require('../../models');

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

// TODO: WHEN PLAYER CHOOSES POST WHICH CHARACTER TO CHARACTER MODEL -- LINKED TO USER

//i dont think this is right
router.post('/:id', (req, res) => {
    // check the session
    if (req.session) {
      User.update({
        character_id: req.body.character_id,
      })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    }
  });

// TODO: PUT ROUTE TO NEW GAME/RESET PROGRESS MODEL?
// router.post('/', (req, res) => {
//     // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
//     User.create({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password
//     })
//       .then(dbUserData => {
//         req.session.save(() => {
//           req.session.user_id = dbUserData.id;
//           req.session.username = dbUserData.username;
//           req.session.loggedIn = true;
//           res.json(dbUserData);
//         });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

module.exports = router;