const router = require('express').Router();

const { 
  getAllTalkers,
  getTalkerById,
  postTalker,
  editTalker,
  deleteTalker,
  searchTalker,
} = require('../controllers/talkerController');

const { 
  nameValidation, 
  ageValidation, 
  talkValidation,
  watchedAtRateValidation,
} = require('../middlewares/newTalkerValidation');

const { tokenValidation } = require('../middlewares/tokenValidation');

router.get('/', getAllTalkers); // Requisito 1
router.get('/search', tokenValidation, searchTalker); // Requisito 7
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

// Requisito 6
router.delete('/:id', tokenValidation, deleteTalker);

module.exports = router;
