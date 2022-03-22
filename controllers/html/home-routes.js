const path = require('path');
const router = require('express').Router();

//TODO ask Qing about line 6
router.get('/', (req, res) => {
  res.render('login', {});
});

router.get('/signup', (req, res) => {
  res.render('signup', {});
});

router.get('/mystery-of-butler-station', (req, res) => {
  res.render('homepage', {});
});

router.get('/character', (req, res) => {
  res.render('character', {});
});
router.get('*', (req, res) => {
  res.render('login', {});
});

// router.get('/mystery-of-butler-station', (req, res) => {                                                                            
//   res.sendFile(path.join(__dirname, '../../public/mystery-of-butler-station.html'));
// });

// router.get('/login', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../views/homepage'));
// });

// router.get('/signup', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../views/signup'));
// });

// router.get('/character-creation', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../public/character-creation.html'));
// });

// router.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../views/login'));
// });

module.exports = router;
