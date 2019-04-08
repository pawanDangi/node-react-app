import express from 'express';

// Streams Controllers
import {
  getStreamsController,
  getStreamController,
  createStreamController,
  updateStreamController,
  deleteStreamController,
  validateStreamController,
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
 *       - Streams
 *     description: Returns a single stream
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Stream id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: A stream
 */
router.get('/:id', getStreamController);

/**
 * @swagger
 * /api/streams/:
 *   post:
 *     tags:
 *       - Streams
 *     description: Create stream
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: stream
 *         description: Stream object
 *         in: body
 *         required: true
 *     responses:
 *       201:
 *         description: A stream
 */
router.post('/', createStreamController);

/**
 * @swagger
 * /api/streams/{id}:
 *   patch:
 *     tags:
 *       - Streams
 *     description: Update stream
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Stream id
 *         in: path
 *         required: true
 *       - name: stream
 *         description: Stream object
 *         in: body
 *         required: true
 *     responses:
 *       200:
 *         description: A stream
 */
router.patch('/:id', updateStreamController);

/**
 * @swagger
 * /api/streams/{id}:
 *   delete:
 *     tags:
 *       - Streams
 *     description: Delete a single stream
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Stream id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: A stream
 */
router.delete('/:id', deleteStreamController);

/**
 * @swagger
 * /api/streams/validate:
 *   post:
 *     tags:
 *       - Streams
 *     description: Validate stream
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: url
 *         description: Stream Url
 *         in: body
 *         required: true
 *     responses:
 *       200:
 *         description: Stream details
 */
router.post('/validate', validateStreamController);

export default router;
