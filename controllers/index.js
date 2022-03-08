const router = require('express').Router();
//require any in controllers folder

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
//other router uses... ('/' homeroutes?)

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;