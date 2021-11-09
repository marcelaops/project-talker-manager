const router = require('express').Router();
const { emailValidation } = require('../middlewares/emailValidation');
const { postLogin } = require('../controllers/loginController');
const { passwordValidation } = require('../middlewares/passwordValidation');

router.post('/', emailValidation, passwordValidation, postLogin);

module.exports = router;