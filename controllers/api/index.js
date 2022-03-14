const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const questionsRoutes = require('./questions.js');
const backpackRoutes = require('./backpack.js');

router.use('/users', userRoutes);
router.use('/questions', questionsRoutes);
router.use('/inventory', backpackRoutes);

 module.exports = router;