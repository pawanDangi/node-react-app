import { isEmpty } from 'lodash';

// Streams Models
import {
  getStreams,
  getStream,
  createStream,
  updateStream,
  deleteStream,
} from '../models/streams';

// Markups Models
import {
  getMarkupByStreamId,
  createMarkup,
  updateMarkup,
  deleteMarkup,
} from '../models/markups';

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
    if (!stream) {
      res.status(404).json('stream not found.');
    }
    res.status(200).json(stream);
  } catch (err) {
    res.status(500).send({
      message: 'Internal Server Error',
    });
  }
};

const createStreamController = async (req, res) => {
  const {
    body: { markup, ...streamData },
  } = req;

  try {
    if (isEmpty(streamData)) {
      res.status(400).json('empty stream data set');
    }
    if (streamData.id) {
      res.status(400).json('stream id is auto generated');
    }
    if (markup) {
      if (markup.id) {
        res.status(400).json('markup id is auto generated');
      }
      if (['frequency', 'slot', 'preRoll'].indexOf(markup.type) === -1) {
        res
          .status(400)
          .json('markup should be either frequency, slot or preRoll');
      }
    }

    let stream = await createStream(streamData);
    await createMarkup(stream.id, markup);

    stream = await getStream(stream.id);
    res.status(201).json(stream);
  } catch (err) {
    res.status(400).json(err.errors[0].message.replace('Streams.', ''));
  }
};

const updateStreamController = async (req, res) => {
  const {
    body: { markup, ...streamData },
  } = req;
  const { id } = req.params;

  try {
    let stream = await getStream(id);
    if (!stream) {
      res.status(404).json('stream not found.');
    }
    if (streamData && streamData.id) {
      res.status(400).json(`can't update stream id`);
    }
    if (!isEmpty(markup)) {
      if (markup.id) {
        res.status(400).json(`can't update stream id`);
      }
      if (['frequency', 'slot', 'preRoll'].indexOf(markup.type) === -1) {
        res
          .status(400)
          .json('markup should be either frequency, slot or preRoll');
      }
      try {
        const m = await getMarkupByStreamId(id);
        if (!isEmpty(m)) {
          await updateMarkup(id, markup);
        } else {
          await createMarkup(id, markup);
        }
      } catch (e) {
        res.status(400).json(e.errors[0].message.replace('Markups.', ''));
      }
    }

    stream = await updateStream(id, streamData);
    res.status(200).json(stream);
  } catch (err) {
    res.status(400).json(err.errors[0].message.replace('Streams.', ''));
  }
};

const deleteStreamController = async (req, res) => {
  const { id } = req.params;

  try {
    let stream = await getStream(id);
    if (!stream) {
      res.status(404).json('stream not found.');
    }
    await deleteMarkup(id);
    stream = await deleteStream(id);
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
