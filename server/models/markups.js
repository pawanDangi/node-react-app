// Markups Table
import schemas from '../schemas';

const getMarkup = async id => {
  const res = await schemas.Markups.findByPk(id);
  return res;
};

const getMarkupByStreamId = async streamId => {
  const res = await schemas.Markups.find({ where: { streamId } });
  return res;
};

const createMarkupByStreamId = async (
  streamId,
  { type = 'slot', value = {} }
) => {
  const res = await schemas.Markups.create({ streamId, type, value });
  return res;
};

const updateMarkupByStreamId = async (
  streamId,
  data = { type: 'slot', value: {} }
) => {
  await schemas.Markups.update({ ...data }, { where: { streamId } });
  const res = await getMarkupByStreamId(streamId);
  return res;
};

const deleteMarkupByStreamId = async streamId => {
  const res = await schemas.Markups.update(
    { deletedAt: new Date() },
    { where: { streamId } }
  );
  return res;
};

export {
  createMarkupByStreamId,
  updateMarkupByStreamId,
  getMarkup,
  getMarkupByStreamId,
  deleteMarkupByStreamId,
};
