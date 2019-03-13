// Streams Model
import models from '../../../models';

const getStreams = (page, pageSize, search, order) => {
  let pagination = {};
  if (page && pageSize) {
    pagination.offset = page * pageSize;
    pagination.limit = pageSize;
  }
  if (order) {
    pagination.order = [order];
  }

  return new Promise((resolve, reject) => {
    models.Streams.findAll({ ...pagination })
      .then(streams => resolve(streams))
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};

const getStream = id => {
  return new Promise((resolve, reject) => {
    if (!id) {
      resolve({});
    } else {
      models.Streams.findById(id)
        .then(stream => resolve(stream))
        .catch(err => {
          console.log(err);
          reject(err);
        });
    }
  });
};

const createStream = data => {
  return new Promise((resolve, reject) => {
    models.Streams.create({ ...data })
      .then(stream => resolve(stream))
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};

const updateStream = (id, data) => {
  return new Promise((resolve, reject) => {
    models.Streams.update({ ...data }, { where: { id } })
      .then(() => {
        models.Streams.findById(id)
          .then(stream => resolve(stream))
          .catch(err => {
            console.log(err);
            reject(err);
          });
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
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
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};

export { getStreams, getStream, createStream, updateStream, deleteStream };
