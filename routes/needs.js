const needsRouter = require('express').Router();
const { db } = require('../conf');

needsRouter.get('/', async (req, res) => {
  try {
    const sql = 'SELECT id, name, picture FROM need';
    const [supplyItem] = await db.query(sql);
    res.status(200).json(supplyItem);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = { needsRouter };
