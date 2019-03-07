const express = require('express');
const router = express.Router();

// Streams Model
const { Streams } = require('../../models');

// @route GET api/streams
// @desc  Get All Streams
router.get('/', (req, res) => {
  Streams.findAll().then(streams => res.json(streams));
});

// @route POST api/streams
// @desc  Create A Streams
router.post('/', (req, res) => {
  res.json(req.body.name);
});

module.exports = router;
