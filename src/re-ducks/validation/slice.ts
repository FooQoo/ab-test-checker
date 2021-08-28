import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { ValidationState } from './type';

export const initialState: ValidationState = {
  existEmpty: true,
  existWrongValue: false,
};

export const validationSlice = createSlice({
  name: 'validation',
  initialState,
  reducers: {
    setExistEmpty: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        existEmpty: action.payload,
      };
    },
    setExistWrongValue: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        existWrongValue: action.payload,
      };
    },
  },
});
