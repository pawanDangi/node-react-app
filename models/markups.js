// Markups Table
import schemas from '../schemas';

const createMarkup = (streamId, data) =>
  new Promise((resolve, reject) => {
    schemas.Markups.create({ streamId, ...data })
      .then(stream => resolve(stream))
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });

export { createMarkup };
