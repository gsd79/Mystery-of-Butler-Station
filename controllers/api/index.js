const router = require('express').Router();
const backpackRoutes = require('./backpack');
const questionsRoutes = require('./questions');
const userRoutes = require('./user-routes');

router.use('/backpack', backpackRoutes);
router.use('/questions', questionsRoutes);
router.use('/user-routes', userRoutes);

module.exports = router;