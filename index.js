const express = require('express');
const cors = require('cors');
const { backPort } = require('./conf');
const { songsRouter } = require('./routes/songs');
const { needsRouter } = require('./routes/needs');
const feelingsRouter = require('./routes/feelings');

const app = express();

app.use(cors());

app.use(express.json());
app.use('/feelings', feelingsRouter);

app.use('/needs', needsRouter);

app.use('/songs', songsRouter);

app.use('/', (req, res) => {
  res.status(404).send('Route not found! ');
});

app.listen(backPort, () => {
  console.log(
    `showMePicto API now available on http://localhost:${backPort} !`
  );
});
