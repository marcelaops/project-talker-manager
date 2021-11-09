const fs = require('fs').promises;

// Requisito 1
const getAllTalkers = async (_req, res) => {
  const fileTalkers = await fs.readFile('./talker.json', 'utf-8');
  const talkers = JSON.parse(fileTalkers);

  return res.status(200).json(talkers);
};

// Requisito 2
const getTalkerById = async (req, res) => {
  const { id } = req.params;
  const fileTalkers = await fs.readFile('./talker.json', 'utf-8');
  const talkers = JSON.parse(fileTalkers);
  const talker = talkers.find((t) => t.id === +id); // o parseInt aqui n tava funcionndo

  if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  res.status(200).json(talker);
};

// Requisito 4
const postTalker = async (req, res) => {
  const fileTalkers = await fs.readFile('./talker.json', 'utf-8');
  const talkers = JSON.parse(fileTalkers);

  const newTalker = { ...req.body, id: talkers.length + 1 };

  await fs.writeFile('./talker.json', JSON.stringify([...talkers, newTalker]));

  res.status(201).json(newTalker);
};

module.exports = { getAllTalkers, getTalkerById, postTalker };
