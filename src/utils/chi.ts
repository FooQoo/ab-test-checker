import type { Bucket } from '../models/bucket';

const ChiSqTest = require('chi-sq-test');

const DDOF = 0;

export const getPValue = (buckets: Bucket[]) => {
  const obs = buckets.map((bucket) => {
    return bucket.numOfConversionUser === null || bucket.numOfTestUser === null
      ? [0, 0]
      : [
          bucket.numOfConversionUser,
          bucket.numOfTestUser - bucket.numOfConversionUser,
        ];
  });

  const { pValue } = ChiSqTest.independence(obs, DDOF);
  return pValue;
};
