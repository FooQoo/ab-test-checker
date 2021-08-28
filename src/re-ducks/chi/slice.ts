import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { defaultBucketSize } from 'src/models/bucket';
import type { ChiState } from 'src/re-ducks/chi/type';

const defaultBucket = [...Array(defaultBucketSize)].map(() => {
  return {
    numOfTestUser: null,
    numOfConversionUser: null,
    conversionRate: null,
  };
});

export const initialState: ChiState = {
  isFivePercent: true,
  buckets: defaultBucket,
};

export const chiSlice = createSlice({
  name: 'chi',
  initialState,
  reducers: {
    setIsFivePercent: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isFivePercent: action.payload,
      };
    },
    setNumOfTestUser: (
      state,
      action: PayloadAction<{ index: number; numOfTestUser: number }>
    ) => {
      const buckets = state.buckets.map((bucket, index) => {
        return index === action.payload.index
          ? {
              ...bucket,
              numOfTestUser: action.payload.numOfTestUser,
              conversionRate:
                (bucket.numOfConversionUser || 0) /
                (action.payload.numOfTestUser || 1),
            }
          : bucket;
      });

      return {
        ...state,
        buckets,
      };
    },
    setNumOfConversionUser: (
      state,
      action: PayloadAction<{ index: number; numOfConversionUser: number }>
    ) => {
      const buckets = state.buckets.map((bucket, index) => {
        return index === action.payload.index
          ? {
              ...bucket,
              numOfConversionUser: action.payload.numOfConversionUser,
              conversionRate:
                action.payload.numOfConversionUser /
                (bucket.numOfTestUser || 1),
            }
          : bucket;
      });

      return {
        ...state,
        buckets,
      };
    },
  },
});
