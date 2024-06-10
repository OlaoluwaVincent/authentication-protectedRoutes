import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
};

export const SIDEBAR_SLICE = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleShow: (state) => {
      state.show = !state.show;
    },
  },
});

export const { toggleShow } = SIDEBAR_SLICE.actions;

export default SIDEBAR_SLICE.reducer;
