import redis from './index';

const setMarkup = async data => {
  const res = await redis.set('abc', 'xyz');
  return res;
};

export { setMarkup };
