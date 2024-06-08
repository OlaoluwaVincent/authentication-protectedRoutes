import { configureStore } from '@reduxjs/toolkit';
import { SIDEBAR_SLICE } from './features/sidebar/sidebar_slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    sidebar: SIDEBAR_SLICE.reducer,
  },
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
