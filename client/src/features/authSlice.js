import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  registerInfo: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.userInfo = action.payload;
    },
    registerUser: (state, action) => {
      state.registerInfo = action.payload;
    },
    logoutUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const { loginUser, registerUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;