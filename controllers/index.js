 const router = require('express').Router();
// //require any in controllers folder

const apiRoutes = require('./api');
const htmlRoutes = require('./html');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;