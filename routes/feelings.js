const feelingsRouter = require('express').Router();
const { db } = require('../conf');

feelingsRouter.get('/', async (req, res) => {
  try {
    const sql = 'SELECT id, name, picture FROM feeling';
    const [feelings] = await db.query(sql);
    res.status(200).json(feelings);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = feelingsRouter;
