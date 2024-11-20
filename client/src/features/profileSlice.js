import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  about: false,
  cv: false,
  looking: false,
  status: false,
  exp: false,
  qual: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setAbout: (state, action) => {
      state.about = action.payload;
    },
    setCV: (state, action) => {
      state.cv = action.payload;
    },
    setLooking: (state, action) => {
      state.looking = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setExp: (state, action) => {
      state.exp = action.payload;
    },
    setQual: (state, action) => {
      state.qual = action.payload;
    },
    setProfileDefaults: () => initialState,
  },
});

export const {
  setAbout,
  setCV,
  setLooking,
  setStatus,
  setExp,
  setQual,
  setProfileDefaults,
} = profileSlice.actions;

export default profileSlice.reducer;
