import Redis from 'ioredis';

import config from '../config';

const env = process.env.NODE_ENV || 'dev';

const { redis: redisConfig } = config[env];

const redis = new Redis.Cluster(redisConfig.primary, redisConfig.options);

export default redis;
