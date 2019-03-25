// Streams Models
import {
  getStreams,
  getStream,
  createStream,
  updateStream,
  deleteStream,
} from '../models/streams';

const getStreamsController = async (req, res) => {
  const { page, pageSize, search, orderBy } = req.query;
  let order = [];
  if (orderBy && orderBy.indexOf('-') === 0) {
    order = [orderBy.replace('-', ''), 'DESC'];
  }
  if (orderBy) {
    order = [orderBy, 'ASC'];
  }

  try {
    const streams = await getStreams(
      Number(page),
      Number(pageSize),
      search,
      order
    );
    res.status(200).json(streams);
  } catch (err) {
    res.status(500).send({
      message: 'Internal Server Error',
    });
  }
};

const getStreamController = async (req, res) => {
  const { id } = req.params;

  try {
    const stream = await getStream(id);
    res.status(200).json(stream);
  } catch (err) {
    res.status(500).send({
      message: 'Internal Server Error',
    });
  }
};

const createStreamController = async (req, res) => {
  const { query } = req;

  try {
    const stream = await createStream(query);
    res.status(200).json(stream);
  } catch (err) {
    res.status(400).json(err.errors[0].message.replace('Streams.', ''));
  }
};

const updateStreamController = async (req, res) => {
  const { body } = req;
  const { id } = req.params;

  try {
    const stream = await updateStream(id, body);
    res.status(200).json(stream);
  } catch (err) {
    res.status(400).json(err.errors[0].message.replace('Streams.', ''));
  }
};

const deleteStreamController = async (req, res) => {
  const { id } = req.params;

  try {
    const stream = await deleteStream(id);
    res.status(200).json(stream);
  } catch (err) {
    res.status(400).json(err.errors[0].message);
  }
};

export {
  getStreamsController,
  getStreamController,
  createStreamController,
  updateStreamController,
  deleteStreamController,
};
