export const LISTENING = 'LISTENING';
export const UNDETERMINED = 'UNDETERMINED';
export const DETERMINED = 'DETERMINED';
export const INVALID = 'INVALID';

export type Message = 'LISTENING' | 'UNDETERMINED' | 'DETERMINED' | 'INVALID';

export type ChiState = {
  isFivePercent: boolean;
  numOfTestUserForAPattern: number | null;
  numOfTestUserForBPattern: number | null;
  numOfConversionUserForAPattern: number | null;
  numOfConversionUserForBPattern: number | null;
  conversionRateForAPattern: number;
  conversionRateForBPattern: number;
  pValue: number | null;
  message: Message;
};
