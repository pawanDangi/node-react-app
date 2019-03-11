import express from 'express';

// Streams Model
import models from '../../models';

const router = express.Router();

// @route GET api/streams
// @desc  Get All Streams
router.get('/', (req, res) => {
  const { page, pageSize, search } = req.query;
  let { orderBy } = req.query;

  models.Streams.findAll({
    offset: Number(page) || 0,
    limit: Number(pageSize) || 100
  })
    .then(streams => res.status(200).json(streams))
    .catch(err => res.status(400).json(err));
});

// @route GET api/streams/:id
// @desc  Get Stream By ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send({
      message: 'Stram id missing'
    });
  }

  models.Streams.findById(id)
    .then(stream => res.status(200).json(stream))
    .catch(err => res.status(400).json(err));
});

// @route POST api/streams
// @desc  Create A Stream
router.post('/', (req, res) => {
  const { query } = req;

  if (!query) {
    return res.status(400).send({
      message: 'Data missing'
    });
  }

  models.Streams.create({ ...query })
    .then(stream => res.status(201).json(stream))
    .catch(err => res.status(400).json(err));
});

// @route PATCH api/streams
// @desc  Update A Stream By ID
router.patch('/', (req, res) => {
  const { query } = req;
  const { id, ...value } = query;

  if (!id) {
    return res.status(400).send({
      message: 'Stram id missing'
    });
  }

  if (!Object.keys(value).length) {
    return res.status(400).send({
      message: 'Data missing'
    });
  }

  models.Streams.update({ ...value }, { where: { id } })
    .then(() => {
      models.Streams.findById(id)
        .then(stream => res.status(200).json(stream))
        .catch(err => res.status(400).json(err));
    })
    .catch(err => res.status(400).json(err));
});

export default router;
