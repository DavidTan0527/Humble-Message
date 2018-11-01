const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const messages = require('./db/model');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/messages', (req, res) => {
  messages.getAll().then((messages) => {
    res.json(messages);
  });
});

app.get('/messages/name', (req, res) => {
  messages.get(req.query.target).then((messages) => {
    res.json(messages);
  });
});

app.post('/messages', (req, res) => {
  messages.post(req.body).then((message) => {
    res.json(message);
  }).catch((err) => {
    res.status(500);
    res.json(err);
  })
});

app.delete('/messages', (req, res) => {
  messages.deleteMsg(req.body).then(() => {
    messages.getAll().then((messages) => {
      res.json(messages);
    });
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
