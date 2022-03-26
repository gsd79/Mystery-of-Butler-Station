const router = require('express').Router();
const userRoutes = require('./user-routes');
const backpackRoutes = require('./backpack');
const questionsRoutes = require('./questions');
const progressRoutes = require('./progress');

router.use('/users', userRoutes);
router.use('/backpack', backpackRoutes);
router.use('/questions', questionsRoutes);
router.use('/progress', progressRoutes);

module.exports = router;
