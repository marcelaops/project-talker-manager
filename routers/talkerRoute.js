const router = require('express').Router();
const { getAllTalkers, getTalkerById, postTalker } = require('../controllers/talkerController');
const { 
  nameValidation, 
  ageValidation, 
  talkValidation,
  watchedAtRateValidation,
} = require('../middlewares/newTalkerValidation');
const { tokenValidation } = require('../middlewares/tokenValidation');

router.get('/', getAllTalkers); // Requisito 1
router.get('/:id', getTalkerById); // Requisito 2

router
  .post(
    '/',
    tokenValidation,
    nameValidation,
    ageValidation,
    talkValidation,
    watchedAtRateValidation,
    postTalker,
  );

module.exports = router;
