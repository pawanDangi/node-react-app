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

/**
 * @swagger
 * /api/streams/:
 *   get:
 *     tags:
 *       - Streams
 *     description: Returns all streams
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: page
 *         description: Page request (default 0)
 *         in: query
 *         required: false
 *       - name: pageSize
 *         description: Number of records (default 50)
 *         in: query
 *         required: false
 *       - name: search
 *         description: Streams search key (default none)
 *         in: query
 *         required: false
 *       - name: orderBy
 *         description: Record ordering (default by id in ASC, for DESC put - before key)
 *         in: query
 *         required: false
 *     responses:
 *       200:
 *         description: An array of streams
 */
router.get('/', getStreamsController);

/**
 * @swagger
 * /api/streams/{id}:
 *   get:
 *     tags:
 *       - Stream
 *     description: Returns a single stream
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: stream id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: A stream
 */
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
