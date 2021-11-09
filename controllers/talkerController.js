const fs = require('fs').promises;

const getAllTalkers = async (_req, res) => {
  const fileTalkers = await fs.readFile('./talker.json', 'utf-8');
  const talkers = JSON.parse(fileTalkers);

  return res.status(200).json(talkers);
};

const getTalkerById = async (req, res, next) => {
  const { id } = req.params;
  const fileTalkers = await fs.readFile('./talker.json', 'utf-8');
  const talkers = JSON.parse(fileTalkers);
  const talker = talkers.find((t) => t.id === +id); // o parseInt aqui n tava funcionndo

  if (!talker) {
    res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    return next();
  }

  res.status(200).json(talker);
  next();
};

module.exports = { getAllTalkers, getTalkerById };
