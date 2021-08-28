export const defaultBucketSize = 2;

export interface Bucket {
  numOfTestUser: number | null;
  numOfConversionUser: number | null;
  conversionRate: number | null;
}
