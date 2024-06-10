import { configureStore } from '@reduxjs/toolkit';
import { SIDEBAR_SLICE } from './features/sidebar/sidebar_slice';
import { useDispatch } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    sidebar: SIDEBAR_SLICE.reducer,
  },
});

// Typing for All State Data
export type RootState = ReturnType<typeof store.getState>;

// Typing for Dispatching actions
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
