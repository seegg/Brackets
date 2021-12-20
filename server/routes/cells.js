const express = require('express');
const mockDb = require('../db/userDb');
const router = express.Router();


module.exports = router;

router.get('/:id', (req, res) => {
  const id = req.params.id;
  mockDb.getUser(id)
    .then((results) => {
      res.status(200).json(results);
    }).catch(err => {
      console.log(err);
    })
})