const emailValidation = async (req, res, next) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });

  const regExEmail = /\w+@\w+.com/;
  if (!regExEmail.test(email)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  next();
};

module.exports = { emailValidation };