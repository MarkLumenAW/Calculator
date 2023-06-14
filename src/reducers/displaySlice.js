import { createSlice } from "@reduxjs/toolkit";

const displaySlice = createSlice({
  name: "display",
  initialState: {
    primary: "0",
    secondary: "",
    primaryReset: false,
    secondaryReset: false,
    formula: ""
  },
  reducers: {
    updatePrimary: (state, action) => {
      state.primary = action.payload.value;
    },
    updateSecondary: (state, action) => {
      state.secondary = action.payload.value;
    },
    updatePrimaryReset: (state, action) => {
      state.primaryReset = action.payload.value;
    },
    updateSecondaryReset: (state, action) => {
      state.secondaryReset = action.payload.value;
    },
    updateFormula: (state, action) => {
      state.formula = action.payload.value;
    }
  }
});

export const { updatePrimary, updateSecondary, updatePrimaryReset, updateSecondaryReset, updateFormula } = displaySlice.actions;
export const displayReducer = displaySlice.reducer;