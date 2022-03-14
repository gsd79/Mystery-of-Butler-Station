 const router = require('express').Router();
 const {User} = require('../../models');


 // TODO: WHEN PLAYER CHOOSES POST WHICH CHARACTER TO CHARACTER MODEL -- LINKED TO USER
 // TODO: PUT ROUTE TO NEW GAME/RESET PROGRESS MODEL?

// // router.post('/', (req, res) => {
// //     // check the session
// //     if (req.session) {
// //       Comment.create({
// //         comment_text: req.body.comment_text,
// //         post_id: req.body.post_id,
// //         // use the id from the session
// //         user_id: req.session.user_id
// //       })
// //         .then(dbCommentData => res.json(dbCommentData))
// //         .catch(err => {
// //           console.log(err);
// //           res.status(400).json(err);
// //         });
// //     }
// //   });
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