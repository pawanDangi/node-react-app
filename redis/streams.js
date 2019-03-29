import redis from './index';

const getAdType = adType => {
  if (adType === 'display') return 1;
  if (adType === 'unknown') return 3;
  return 2;
};

const setStream = async data => {
  const partnerKey = `pg:partner:${data.id}`.toLowerCase();
  const streamKey = `epa:stream:${data.id}`.toLowerCase();

  redis.hset(partnerKey, 'pub', (data.partner || '').toString().toLowerCase());
  redis.hset(partnerKey, 'pst', 1);
  redis.hset(partnerKey, 'fcap', 1);
  redis.hset(partnerKey, 'blck', 1);
  redis.hset(partnerKey, 'invfp', data.florPrice);
  redis.hset(partnerKey, 'bid', 1);
  redis.hset(partnerKey, 'adt', getAdType(data.adType));
  redis.hset(partnerKey, 'pgd', data.pdDemand ? 1 : 0);
  redis.hset(partnerKey, 'nff', 0);
  redis.hset(partnerKey, 'psta', 1);
  redis.hset(partnerKey, 'pgda', 0);
  redis.hset(partnerKey, 'pc', 1);

  redis.hset(streamKey, 'type', (data.type || '').toString().toLowerCase());
  redis.hset(streamKey, 'url', (data.url || '').toString());
  redis.hset(streamKey, 'adconfig', 'adconfig');
  return redis.hset(
    streamKey,
    'format',
    (data.format || '').toString().toLowerCase()
  );
};

export { setStream };
