const fs = require('fs').promises;

const getAllTalkers = async (_req, res) => {
  const fileTalkers = await fs.readFile('./talker.json', 'utf-8');
  const talkers = JSON.parse(fileTalkers);

  return res.status(200).json(talkers);
};

module.exports = { getAllTalkers };