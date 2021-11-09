const router = require('express').Router();
const { getAllTalkers } = require('../controllers/talkerController');

router.get('/', getAllTalkers);

module.exports = router;