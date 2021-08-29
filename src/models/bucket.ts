export const defaultBucketSize = 3;

export interface Bucket {
  numOfTestUser: number | null;
  numOfConversionUser: number | null;
  conversionRate: number | null;
}
