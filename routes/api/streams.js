import express from 'express';

// Streams Model
import models from '../../models';

const router = express.Router();

// @route GET api/streams
// @desc  Get All Streams
router.get('/', (req, res) => {
  models.Streams.findAll().then(streams => res.json(streams));
});

// @route POST api/streams
// @desc  Create A Streams
router.post('/', (req, res) => {
  res.json(req.body.name);
});

export default router;
