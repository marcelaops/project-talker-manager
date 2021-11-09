const router = require('express').Router();
const { getAllTalkers, getTalkerById } = require('../controllers/talkerController');

router.get('/', getAllTalkers);
router.get('/:id', getTalkerById);

module.exports = router;
