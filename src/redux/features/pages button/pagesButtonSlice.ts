import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pagesButtonInitialState } from "../../../shared/interfaces";

const initialState: pagesButtonInitialState = { page: 1 };

const pagesButtonSlice = createSlice({
  name: "pagesButtonSlice",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      return { ...state, page: action.payload };
    },
  },
});

export default pagesButtonSlice.reducer;
export const { setPage } = pagesButtonSlice.actions;
