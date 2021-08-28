import type { EnhancedStore } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import { chiSlice, initialState as chiState } from 'src/re-ducks/chi/slice';
import {
  initialState as validationState,
  validationSlice,
} from 'src/re-ducks/validation/slice';

const rootReducer = combineReducers({
  chi: chiSlice.reducer,
  validation: validationSlice.reducer,
});

const preloadedState = () => {
  return {
    chi: chiState,
    validation: validationState,
  };
};

export type StoreState = ReturnType<typeof preloadedState>;

export const createStore = (): EnhancedStore => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(logger);
    },
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: preloadedState(),
  });
};
