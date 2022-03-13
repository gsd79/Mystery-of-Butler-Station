
const router = require('express').Router();
const homeRoutes = require('./home-routes');
const loginRoutes = require('./login-routes');




router.use('/', homeRoutes);
router.use('/', loginRoutes);

module.exports = router;
