import { isEmpty } from 'lodash';

// Streams Models
import {
  getStreams,
  getStream,
  createStream,
  updateStream,
  deleteStream
} from '../models/streams';

// Markups Models
import {
  getMarkupByStreamId,
  createMarkupByStreamId,
  updateMarkupByStreamId,
  deleteMarkupByStreamId
} from '../models/markups';

// Markup redis
import { setStream } from '../redis/streams';

// Markup validation helper
import isInvalidMarkup from '../helpers/isInvalidMarkup';

const getStreamsController = async (req, res) => {
  const { page, pageSize, search, orderBy } = req.query;
  let orderType = 'ASC';
  let orderKey = 'id';
  if (orderBy) {
    if (orderBy.indexOf('-') === 0) {
      orderType = 'DESC';
    }
    orderKey = orderBy.replace('-', '');
  }
  const order = [orderKey, orderType];
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
      message: 'Internal Server Error'
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
      message: 'Internal Server Error'
    });
  }
};

const createStreamController = async (req, res) => {
  const {
    body: { markup, ...streamData }
  } = req;

  try {
    if (isEmpty(streamData)) {
      res.status(400).json('empty stream data set');
    }
    if (streamData.id) {
      res.status(400).json('stream id is auto generated');
    }
    if (
      streamData.format &&
      ['HLS', 'DASH'].indexOf(streamData.format) === -1
    ) {
      res.status(400).json('format should be HLS or DASH only');
    }
    if (
      streamData.type &&
      ['VOD', 'LIVE', 'EVENT'].indexOf(streamData.type) === -1
    ) {
      res.status(400).json('type should be VOD, LIVE or EVENT only');
    }
    if (
      streamData.adType &&
      ['video', 'display', 'unknown'].indexOf(streamData.adType) === -1
    ) {
      res.status(400).json('ad type should be video, display or unknown only');
    }

    if (markup) {
      if (markup.id) {
        res.status(400).json('markup id is auto generated');
      }
      const inValidMarkup = isInvalidMarkup(markup);
      if (inValidMarkup) {
        res.status(400).json(inValidMarkup);
      }
    }

    let stream = await createStream(streamData);
    await createMarkupByStreamId(stream.id, markup || {});

    stream = await getStream(stream.id);

    try {
      await setStream(stream);
    } catch (e) {
      console.log(e);
    }
    res.status(201).json(stream);
  } catch (err) {
    res.status(400).json(err.errors[0].message.replace('Streams.', ''));
  }
};

const updateStreamController = async (req, res) => {
  const {
    body: { markup, ...streamData }
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
        res.status(400).json(`can't update markup id`);
      }
      const inValidMarkup = isInvalidMarkup(markup);
      if (inValidMarkup) {
        res.status(400).json(inValidMarkup);
      }
      try {
        const m = await getMarkupByStreamId(id);
        if (!isEmpty(m)) {
          await updateMarkupByStreamId(id, markup);
        } else {
          await createMarkupByStreamId(id, markup);
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
    await deleteMarkupByStreamId(id);
    stream = await deleteStream(id);
    res.status(200).json('stream deleted successfully');
  } catch (err) {
    res.status(400).json(err.errors[0].message);
  }
};

export {
  getStreamsController,
  getStreamController,
  createStreamController,
  updateStreamController,
  deleteStreamController
};
