import type { EnhancedStore } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import { chiSlice, initialState as chiState } from 'src/re-ducks/chi/slice';

const rootReducer = combineReducers({
  chi: chiSlice.reducer,
});

const preloadedState = () => {
  return {
    chi: chiState,
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
