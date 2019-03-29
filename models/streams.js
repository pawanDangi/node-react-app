import Sequelize from 'sequelize';

// Streams Table
import schemas from '../schemas';

import makeId from '../helpers/makeid';

const { Op } = Sequelize;

const getStreams = async (page, pageSize, search, order) => {
  const data = await schemas.Streams.findAndCountAll();
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
    { association: 'markup', attributes: ['id', 'type', 'value'] },
  ];

  const total = data.count;
  const pages = Math.ceil(total / query.limit);
  const prevPage =
    !page || page === 0 || page < 0 || page > pages ? null : page - 1;
  const nextPage = page === pages || page > pages ? null : (page || 0) + 1;
  const streams = await schemas.Streams.findAll({ ...query });
  return {
    page: page || 0,
    pages,
    prevPage,
    nextPage,
    total,
    pageSize: query.limit,
    streams,
  };
};

const getStream = async id => {
  const res = await schemas.Streams.findByPk(id, {
    include: [{ association: 'markup', attributes: ['id', 'type', 'value'] }],
  });
  return res;
};

const createStream = async data => {
  const id = `st-${data.partner}-${makeId()}`;
  const stream = await getStream(id);
  if (stream) {
    await createStream(data);
  }
  const res = await schemas.Streams.create({ id, ...data });
  return res;
};

const updateStream = async (id, data) => {
  await schemas.Streams.update({ ...data }, { where: { id } });
  const res = await getStream(id);
  return res;
};

const deleteStream = async id => {
  const res = await schemas.Streams.update(
    { deletedAt: new Date() },
    { where: { id } }
  );
  return res;
};

export { getStreams, getStream, createStream, updateStream, deleteStream };
