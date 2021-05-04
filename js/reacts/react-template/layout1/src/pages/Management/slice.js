import { createSlice } from '@reduxjs/toolkit';

export const managementSlice = createSlice({
  name: 'management',
  initialState: {
    data: [{
      series: 'original',
      minPh: 3,
      maxPh: 3,
      minTemp: 25,
      maxTemp: 26,
      minDo: 30,
      maxDo: 36,
      minBrix: 50,
      maxBrix: 60,
      other: null,
      tableData: null,
    }],
  },
  reducers: {
    update: (state, action) => state = action.payload,
  }
});

export const selectManagement = state => state.management.data;
export const { update } = managementSlice.actions;

export default managementSlice.reducer;