import { createSlice } from '@reduxjs/toolkit';

interface SidebarActionType {
  payload: boolean;
  type: string;
}
const initData = {
  show: false,
};

export const SIDEBAR_SLICE = createSlice({
  name: 'sidebar',
  initialState: initData,
  reducers: {
    toggleShow: (state, action: SidebarActionType) => {
      state.show = action.payload;
    },
  },
});

export const { toggleShow } = SIDEBAR_SLICE.actions;

export default SIDEBAR_SLICE.reducer;
