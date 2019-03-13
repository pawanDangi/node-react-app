import Sequelize from 'sequelize';

// Streams Model
import models from '../../../models';

const Op = Sequelize.Op;

const getStreams = (page, pageSize, search, order) => {
  let pagination = {};
  if (pageSize) {
    pagination.offset = (page || 0) * pageSize;
    pagination.limit = pageSize;
  }
  if (order) {
    pagination.order = [order];
  }
  if (search) {
    pagination.where = {
      [Op.or]: [
        { name: { [Op.like]: `%${search}%` } },
        { floorPrice: { [Op.like]: `%${search}%` } },
        { type: { [Op.like]: `%${search}%` } },
        { format: { [Op.like]: `%${search}%` } }
      ]
    };
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
      models.Streams.findByPk(id)
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
        models.Streams.findByPk(id)
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
