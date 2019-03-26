// Markups Table
import schemas from '../schemas';

const getMarkup = id =>
  new Promise((resolve, reject) => {
    schemas.Markups.findByPk(id)
      .then(markup => resolve(markup))
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });

const getMarkupByStreamId = streamId =>
  new Promise((resolve, reject) => {
    schemas.Markups.find({ where: { streamId } })
      .then(markup => resolve(markup))
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });

const createMarkup = (streamId, { type = 'slot', value = {} }) =>
  new Promise((resolve, reject) => {
    schemas.Markups.create({ streamId, type, value })
      .then(markup => resolve(markup))
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });

const updateMarkup = (streamId, data = { type: 'slot', value: {} }) =>
  new Promise((resolve, reject) => {
    schemas.Markups.update({ ...data }, { where: { streamId } })
      .then(async () => {
        const markup = getMarkupByStreamId(streamId);
        resolve(markup);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });

const deleteMarkup = streamId =>
  new Promise((resolve, reject) => {
    schemas.Markups.update({ deletedAt: new Date() }, { where: { streamId } })
      .then(() => {
        resolve({
          message: 'Markup deleted successfully',
        });
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });

export {
  createMarkup,
  updateMarkup,
  getMarkup,
  getMarkupByStreamId,
  deleteMarkup,
};
