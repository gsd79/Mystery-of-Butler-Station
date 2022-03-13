// const path = require('path');
// const router = require('express').Router();

// router.put('/:id', (req, res) => {
//     // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
//     // pass in req.body instead to only update what's passed through
//     User.update(req.body, {
// TODO:  individualHooks: true,
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(dbUserData => {
//         if (!dbUserData) {
//           res.status(404).json({ message: 'No user found with this id' });
//           return;
//         }
//         res.json(dbUserData);
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });


// module.exports = router;
