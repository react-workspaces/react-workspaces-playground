import { configureStore, ThunkAction, Action, StoreEnhancer } from '@reduxjs/toolkit';
import withReduxEnhancer from 'addon-redux/enhancer';
import counterReducer from '../features/counter/counterSlice';

const enhancers = new Array<StoreEnhancer>();

if (process.env.NODE_ENV !== 'production') {
  enhancers.push(withReduxEnhancer);
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  enhancers: enhancers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
