import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "" as string | undefined, // can be undefined or string
};

export const searchInputSlice = createSlice({
  name: "searchInputSlice",
  initialState: initialState,
  reducers: {
    /**
     *
     * @param query
     */
    setQuery(state, action: { payload: string }) {
      state.query = action.payload;
    },
    resetQuery(state) {
      state.query = "";
    },
  },
});

export const { setQuery, resetQuery } = searchInputSlice.actions;
export default searchInputSlice.reducer;
