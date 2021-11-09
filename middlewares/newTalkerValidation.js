const nameValidation = (req, rest, next) => {
  const { name } = req.body;

  if (!name) return rest.status(400).json({ message: 'O campo "name" é obrigatório' });

  if (name.length < 3) {
    return rest.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  next();
};

const ageValidation = (req, rest, next) => {
  const { age } = req.body;

  if (!age) return rest.status(400).json({ message: 'O campo "age" é obrigatório' });

  if (age <= 18) {
    return rest.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }

  next();
};

const talkValidation = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) {
    return res
      .status(400)
      .json(
        { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' },
      );
  }

  if (!('watchedAt' in talk) || !('rate' in talk)) { /// Explicação do Bruno
    return res
      .status(400)
      .json(
        { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' },
      );
  }

  next();
};

const watchedAtRateValidation = (req, res, next) => {
  const { talk } = req.body;
  const { watchedAt, rate } = talk;

  const regExWatchedAt = /([0-9]{2})+\/+([0-9]{2})+\/+([0-9]{4})/;
  if (!regExWatchedAt.test(watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  if (rate < 1 || rate > 5) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  
  next();
};

module.exports = { nameValidation, ageValidation, watchedAtRateValidation, talkValidation };
