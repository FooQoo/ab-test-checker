import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { ChiState } from 'src/re-ducks/chi/type';
import { DETERMINED, LISTENING, UNDETERMINED } from 'src/re-ducks/chi/type';
import { getPValue } from 'src/utils/chi';

export const initialState: ChiState = {
  isFivePercent: true,
  numOfTestUserForAPattern: null,
  numOfTestUserForBPattern: null,
  numOfConversionUserForAPattern: null,
  numOfConversionUserForBPattern: null,
  conversionRateForAPattern: 0,
  conversionRateForBPattern: 0,
  pValue: null,
  message: LISTENING,
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
    setNumOfTestUserForAPattern: (state, action: PayloadAction<number>) => {
      // 各パラメータの値
      const numOfTestUserForAPattern = action.payload;
      const numOfTestUserForBPattern = state.numOfTestUserForBPattern || 1;
      const numOfConversionUserForAPattern =
        state.numOfConversionUserForAPattern || 0;
      const numOfConversionUserForBPattern =
        state.numOfConversionUserForBPattern || 0;

      // P値
      const pValue = getPValue(
        numOfTestUserForAPattern,
        numOfTestUserForBPattern,
        numOfConversionUserForAPattern,
        numOfConversionUserForBPattern
      );

      // コンバージョン確率(A)
      const conversionRateForAPattern =
        numOfConversionUserForAPattern / numOfTestUserForAPattern;

      const message =
        conversionRateForAPattern === state.conversionRateForBPattern ||
        pValue >= (state.isFivePercent ? 0.05 : 0.01)
          ? UNDETERMINED
          : DETERMINED;

      return {
        ...state,
        numOfTestUserForAPattern,
        conversionRateForAPattern,
        pValue,
        message,
      };
    },
    setNumOfTestUserForBPattern: (state, action: PayloadAction<number>) => {
      const numOfTestUserForAPattern = state.numOfTestUserForAPattern || 1;
      const numOfTestUserForBPattern = action.payload;
      const numOfConversionUserForAPattern =
        state.numOfConversionUserForAPattern || 0;
      const numOfConversionUserForBPattern =
        state.numOfConversionUserForBPattern || 0;
      const conversionRateForBPattern =
        numOfConversionUserForAPattern / numOfTestUserForAPattern;
      const pValue = getPValue(
        numOfTestUserForAPattern,
        numOfTestUserForBPattern,
        numOfConversionUserForAPattern,
        numOfConversionUserForBPattern
      );

      const message =
        state.conversionRateForAPattern === conversionRateForBPattern ||
        pValue >= (state.isFivePercent ? 0.05 : 0.01)
          ? UNDETERMINED
          : DETERMINED;

      return {
        ...state,
        numOfTestUserForBPattern,
        conversionRateForBPattern,
        pValue,
        message,
      };
    },
    setNumOfConversionUserForAPattern: (
      state,
      action: PayloadAction<number>
    ) => {
      const numOfTestUserForAPattern = state.numOfTestUserForAPattern || 1;
      const numOfTestUserForBPattern = state.numOfTestUserForBPattern || 1;
      const numOfConversionUserForAPattern = action.payload;
      const numOfConversionUserForBPattern =
        state.numOfConversionUserForBPattern || 0;
      const conversionRateForAPattern =
        numOfConversionUserForAPattern / numOfTestUserForAPattern;
      const pValue = getPValue(
        numOfTestUserForAPattern,
        numOfTestUserForBPattern,
        numOfConversionUserForAPattern,
        numOfConversionUserForBPattern
      );

      const message =
        conversionRateForAPattern === state.conversionRateForBPattern ||
        pValue >= (state.isFivePercent ? 0.05 : 0.01)
          ? UNDETERMINED
          : DETERMINED;

      return {
        ...state,
        numOfConversionUserForAPattern,
        conversionRateForAPattern,
        pValue,
        message,
      };
    },
    setNumOfConversionUserForBPattern: (
      state,
      action: PayloadAction<number>
    ) => {
      const numOfTestUserForAPattern = state.numOfTestUserForAPattern || 1;
      const numOfTestUserForBPattern = state.numOfTestUserForBPattern || 1;
      const numOfConversionUserForAPattern =
        state.numOfConversionUserForAPattern || 1;
      const numOfConversionUserForBPattern = action.payload;
      const conversionRateForBPattern =
        numOfConversionUserForBPattern / numOfTestUserForBPattern;
      const pValue = getPValue(
        numOfTestUserForAPattern,
        numOfTestUserForBPattern,
        numOfConversionUserForAPattern,
        numOfConversionUserForBPattern
      );

      const message =
        state.conversionRateForAPattern === conversionRateForBPattern ||
        pValue >= (state.isFivePercent ? 0.05 : 0.01)
          ? UNDETERMINED
          : DETERMINED;
      return {
        ...state,
        numOfConversionUserForBPattern,
        conversionRateForBPattern,
        pValue,
        message,
      };
    },
  },
});
