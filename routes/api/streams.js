import express from 'express';
const router = express.Router();

// Streams Model
import models from '../../models';

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
