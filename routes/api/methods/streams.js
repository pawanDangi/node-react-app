// Streams Model
import models from '../../../models';

const getStreams = (page, pageSize, search, orderBy) => {
  let pagination = {};
  if (page && pageSize) {
    pagination.offset = page * pageSize;
    pagination.limit = pageSize;
  }
  return new Promise((resolve, reject) => {
    models.Streams.findAll({ ...pagination })
      .then(streams => resolve(streams))
      .catch(err => reject(err));
  });
};

const getStream = id => {
  return new Promise((resolve, reject) => {
    if (!id) {
      resolve({});
    } else {
      models.Streams.findById(id)
        .then(stream => resolve(stream))
        .catch(err => reject(err));
    }
  });
};

const createStream = data => {
  return new Promise((resolve, reject) => {
    models.Streams.create({ ...data })
      .then(stream => resolve(stream))
      .catch(err => reject(err));
  });
};

const updateStream = (id, data) => {
  return new Promise((resolve, reject) => {
    models.Streams.update({ ...data }, { where: { id } })
      .then(() => {
        models.Streams.findById(id)
          .then(stream => resolve(stream))
          .catch(err => reject(err));
      })
      .catch(err => reject(err));
  });
};

const deleteStream = id => {
  return new Promise((resolve, reject) => {
    models.Streams.update({ deletedAt: new Date() }, { where: { id } })
      .then(() => {
        resolve({
          message: 'Stream deleted successfully'
        });
      })
      .catch(err => reject(err));
  });
};

export { getStreams, getStream, createStream, updateStream, deleteStream };
