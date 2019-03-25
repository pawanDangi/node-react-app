import Sequelize from 'sequelize';

// Streams Table
import schemas from '../schemas';

const { Op } = Sequelize;

const getStreams = (page, pageSize, search, order) => {
  const query = {};
  if (pageSize) {
    query.offset = (page || 0) * pageSize;
    query.limit = pageSize;
  }
  if (order.length) {
    query.order = [order];
  }
  if (search) {
    query.where = {
      [Op.or]: [
        { name: { [Op.like]: `%${search}%` } },
        { floorPrice: { [Op.like]: `%${search}%` } },
        { type: { [Op.like]: `%${search}%` } },
        { format: { [Op.like]: `%${search}%` } }
      ]
    };
  }
  query.include = [{ association: 'markers', attributes: ['type', 'value'] }];

  return new Promise((resolve, reject) => {
    schemas.Streams.findAll({ ...query })
      .then(streams => resolve(streams))
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};

const getStream = id =>
  new Promise((resolve, reject) => {
    if (!id) {
      resolve({});
    } else {
      schemas.Streams.findByPk(id, {
        include: [{ association: 'markers', attributes: ['type', 'value'] }]
      })
        .then(stream => resolve(stream))
        .catch(err => {
          console.log(err);
          reject(err);
        });
    }
  });

const createStream = data =>
  new Promise((resolve, reject) => {
    schemas.Streams.create({ ...data })
      .then(stream => resolve(stream))
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });

const updateStream = (id, data) =>
  new Promise((resolve, reject) => {
    schemas.Streams.update({ ...data }, { where: { id } })
      .then(() => {
        schemas.Streams.findByPk(id)
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

const deleteStream = id =>
  new Promise((resolve, reject) => {
    schemas.Streams.update({ deletedAt: new Date() }, { where: { id } })
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

export { getStreams, getStream, createStream, updateStream, deleteStream };
