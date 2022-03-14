const router = require('express').Router();
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