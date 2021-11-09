const router = require('express').Router();
const { getAllTalkers, getTalkerById } = require('../controllers/talkerController');

router.get('/', getAllTalkers); // Requisito 1
router.get('/:id', getTalkerById); // Requisito 2

module.exports = router;
