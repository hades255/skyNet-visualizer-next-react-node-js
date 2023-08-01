import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import userDetails from '../src/constants/userdetails';

interface PortfolioState {
  value: boolean;
  userData: object; // Replace `any` with the appropriate type for `userData`
  yearSelected: number;
  workCardSelected: any; // Replace `any` with the appropriate type for `workCardSelected`
}

const initialState: PortfolioState = {
  value: false,
  userData: {},
  yearSelected: 0,
  workCardSelected: {},
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    yearSelection: (state, action: PayloadAction<number>) => {
      state.yearSelected = action.payload;
      console.log(typeof state.yearSelected, state.yearSelected);
    },
    workCardSelection: (state, action: PayloadAction<any>) => {
      state.workCardSelected = action.payload;
    },
    logUserData: (state, action: PayloadAction<object[]>) => {
      state.userData = action.payload;
    },
  },
});

export const { yearSelection, workCardSelection, logUserData } =
  portfolioSlice.actions;

export default portfolioSlice.reducer;
