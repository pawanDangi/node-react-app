import express from 'express';

// Streams Controllers
import {
  getStreamsController,
  getStreamController,
  createStreamController,
  updateStreamController,
  deleteStreamController,
} from '../controllers/streams';

const router = express.Router();

// @route GET api/streams
// @desc  Get All Streams
router.get('/', getStreamsController);

// @route GET api/streams/:id
// @desc  Get Stream By ID
router.get('/:id', getStreamController);

// @route POST api/streams
// @desc  Create A Stream
router.post('/', createStreamController);

// @route PATCH api/streams
// @desc  Update A Stream By ID
router.patch('/:id', updateStreamController);

// @route DELETE api/streams/:id
// @desc  Delete Stream By ID
router.delete('/:id', deleteStreamController);

export default router;
