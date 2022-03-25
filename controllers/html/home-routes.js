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


module.exports = router;
