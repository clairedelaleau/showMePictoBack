const songsRouter = require('express').Router();
const { db } = require('../conf');

songsRouter.get('/', async (req, res) => {
  try {
    const sql = 'SELECT id, name, picture, link FROM song';
    const [songs] = await db.query(sql);
    res.status(200).json(songs);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = { songsRouter };
