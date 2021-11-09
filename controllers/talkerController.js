const fs = require('fs').promises;

const talkerJson = './talker.json';

// Requisito 1
const getAllTalkers = async (_req, res) => {
  const fileTalkers = await fs.readFile(talkerJson, 'utf-8');
  const talkers = JSON.parse(fileTalkers);

  return res.status(200).json(talkers);
};

// Requisito 2
const getTalkerById = async (req, res) => {
  const { id } = req.params;
  const fileTalkers = await fs.readFile(talkerJson, 'utf-8');
  const talkers = JSON.parse(fileTalkers);
  const talker = talkers.find((t) => t.id === +id); // o parseInt aqui n tava funcionndo

  if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  res.status(200).json(talker);
};

// Requisito 4
const postTalker = async (req, res) => {
  const fileTalkers = await fs.readFile(talkerJson, 'utf-8');
  const talkers = JSON.parse(fileTalkers);

  const newTalker = { ...req.body, id: talkers.length + 1 };

  await fs.writeFile('./talker.json', JSON.stringify([...talkers, newTalker]));

  res.status(201).json(newTalker);
};

// Requisito 5
const editTalker = async (req, res) => {
  const { id } = req.params;

  const fileTalkers = await fs.readFile(talkerJson, 'utf-8');
  const talkers = JSON.parse(fileTalkers);

  const talkerIndex = talkers.findIndex((talker) => talker.id === +id);
  const talker = { ...req.body, id: +id };
  talkers[talkerIndex] = talker;

  await fs.writeFile('./talker.json', JSON.stringify(talkers));

  res.status(200).json(talker);
};

// Requisito 6
const deleteTalker = async (req, res) => {
  const { id } = req.params;

  const fileTalkers = await fs.readFile(talkerJson, 'utf-8');
  const talkers = JSON.parse(fileTalkers);

  const remainingTalkers = talkers.filter((talker) => talker.id !== +id);

  await fs.writeFile('./talker.json', JSON.stringify(remainingTalkers));

  res.status(200).json({ message: 'Pessoa palestrante deletada com sucesso' });
};

module.exports = { getAllTalkers, getTalkerById, postTalker, editTalker, deleteTalker };
