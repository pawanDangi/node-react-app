import express from 'express';

// Streams Methods
import {
  getStreams,
  getStream,
  createStream,
  updateStream,
  deleteStream
} from './methods/streams';

const router = express.Router();

// @route GET api/streams
// @desc  Get All Streams
router.get('/', async (req, res) => {
  const { page, pageSize, search, orderBy } = req.query;

  try {
    const streams = await getStreams(page, pageSize, search, orderBy);
    res.status(200).json(streams);
  } catch (err) {
    res.status(500).send({
      message: 'Internal Server Error'
    });
  }
});

// @route GET api/streams/:id
// @desc  Get Stream By ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const stream = await getStream(id);
    res.status(200).json(stream);
  } catch (err) {
    res.status(500).send({
      message: 'Internal Server Error'
    });
  }
});

// @route POST api/streams
// @desc  Create A Stream
router.post('/', async (req, res) => {
  const { query } = req;

  try {
    const stream = await createStream(query);
    res.status(200).json(stream);
  } catch (err) {
    res.status(400).json(err.errors[0].message);
  }
});

// @route PATCH api/streams
// @desc  Update A Stream By ID
router.patch('/', async (req, res) => {
  const {
    query: { id, ...value }
  } = req;

  try {
    const stream = await updateStream(id, value);
    res.status(200).json(stream);
  } catch (err) {
    res.status(400).json(err.errors[0].message);
  }
});

// @route DELETE api/streams/:id
// @desc  Delete Stream By ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const stream = await deleteStream(id);
    res.status(200).json(stream);
  } catch (err) {
    res.status(400).json(err.errors[0].message);
  }
});

export default router;
