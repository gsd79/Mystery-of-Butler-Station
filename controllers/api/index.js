const router = require('express').Router();
const backpackRoutes = require('./backpack');
const questionsRoutes = require('./questions');
const userRoutes = require('./user-routes');
const progressRoutes = require('./progress');

router.use('/backpack', backpackRoutes);
router.use('/questions', questionsRoutes);
router.use('/users', userRoutes);
router.use('/progress', progressRoutes);

module.exports = router;