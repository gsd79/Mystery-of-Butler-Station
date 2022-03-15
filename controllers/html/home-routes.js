const path = require('path');
const router = require('express').Router();

router.get('/mystery-of-butler-station', (req, res) => {                                                                            
  res.sendFile(path.join(__dirname, '../../public/mystery-of-butler-station.html'));
});

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/login.html'));
});

router.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/signup.html'));
});

router.get('/character-creation', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/character-creation.html'));
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/login.html'));
});

module.exports = router;