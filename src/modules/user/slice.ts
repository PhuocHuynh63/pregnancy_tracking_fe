import { createSlice } from "@reduxjs/toolkit";
import { userState } from "./state";

const editorSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    
  },
});

export const {
    
} = editorSlice.actions;

export default editorSlice.reducer;

