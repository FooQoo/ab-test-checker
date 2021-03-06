import type { Bucket } from 'src/models/bucket';

export const LISTENING = 'LISTENING';
export const UNDETERMINED = 'UNDETERMINED';
export const DETERMINED = 'DETERMINED';
export const INVALID = 'INVALID';

export type Message = 'LISTENING' | 'UNDETERMINED' | 'DETERMINED' | 'INVALID';

export type ChiState = {
  isFivePercent: boolean;
  buckets: Bucket[];
};
