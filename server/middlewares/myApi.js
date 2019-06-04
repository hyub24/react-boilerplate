const express = require('express');
const router = express.Router();
const db = require('../database/index');

router.post('/inputs', (req, res) => {
  db.postInput(req.body.input, error => {
    if (error) res.status(500).send(error);
    else res.sendStatus(201);
  });
});

router.get('/inputs', (req, res) => {
  db.getInputs((error, results) => {
    if (error) res.status(500).send(error);
    else res.send(results);
  });
});

module.exports = router;
