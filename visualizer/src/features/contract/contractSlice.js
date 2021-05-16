import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalSupply: undefined,
  metadata: undefined,
};

export const contractSlice = createSlice({
  name: "contract",
  initialState,
  reducers: {
    setTotalSupply: (state, action) => {
      state.totalSupply = action.payload;
    },
    setMetadata: (state, action) => {
      state.metadata = action.payload;
    },
  },
});

export const { setTotalSupply, setMetadata } = contractSlice.actions;

export default contractSlice.reducer;
