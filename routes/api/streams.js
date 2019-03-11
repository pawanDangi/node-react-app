import express from 'express';

// Streams Model
import models from '../../models';

const router = express.Router();

// @route GET api/streams
// @desc  Get All Streams
router.get('/', (req, res) => {
  const { page, pageSize, orderBy, search } = req.query;
  console.log(typeof page, pageSize, orderBy, search);
  models.Streams.findAll({
    offset: Number(page),
    limit: Number(pageSize)
  }).then(streams => res.json(streams));
});

// @route POST api/streams
// @desc  Create A Streams
router.post('/', (req, res) => {
  res.json(req.body.name);
});

export default router;
