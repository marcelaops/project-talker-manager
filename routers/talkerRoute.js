const router = require('express').Router();
const { 
  getAllTalkers,
  getTalkerById,
  postTalker,
  editTalker,
} = require('../controllers/talkerController');
const { 
  nameValidation, 
  ageValidation, 
  talkValidation,
  watchedAtRateValidation,
} = require('../middlewares/newTalkerValidation');
const { tokenValidation } = require('../middlewares/tokenValidation');

router.get('/', getAllTalkers); // Requisito 1
router.get('/:id', getTalkerById); // Requisito 2

// Requisito 4
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

  // Requisito 5
router.put(
  '/:id',
  tokenValidation, 
  nameValidation,
  ageValidation,
  talkValidation,
  watchedAtRateValidation,
  editTalker,
);

module.exports = router;
