import Sequelize from 'sequelize';

// Streams Table
import schemas from '../schemas';

const { Op } = Sequelize;

const getStreams = (page, pageSize, search, order) =>
  new Promise((resolve, reject) => {
    schemas.Streams.findAndCountAll().then(data => {
      const query = {
        offset: 0,
        limit: 50,
      };
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
            { format: { [Op.like]: `%${search}%` } },
          ],
        };
      }
      query.include = [
        { association: 'markups', attributes: ['id', 'type', 'value'] },
      ];

      const total = data.count;
      const pages = Math.ceil(total / query.limit);
      const prevPage =
        !page || page === 0 || page < 0 || page > pages ? null : page - 1;
      const nextPage = page === pages || page > pages ? null : (page || 0) + 1;

      schemas.Streams.findAll({ ...query })
        .then(streams =>
          resolve({
            page: page || 0,
            pages,
            prevPage,
            nextPage,
            total,
            pageSize: query.limit,
            streams,
          })
        )
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  });

const getStream = id =>
  new Promise((resolve, reject) => {
    if (!id) {
      resolve({});
    } else {
      schemas.Streams.findByPk(id, {
        include: [
          { association: 'markups', attributes: ['id', 'type', 'value'] },
        ],
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
      .then(async () => {
        const stream = await getStream(id);
        resolve(stream);
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
          message: 'Stream deleted successfully',
        });
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });

export { getStreams, getStream, createStream, updateStream, deleteStream };
