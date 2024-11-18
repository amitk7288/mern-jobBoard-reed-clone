import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  registerInfo: null,
  profileInfo: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.userInfo = action.payload;
      state.registerInfo = null;
      state.profileInfo = action.payload;
    },
    registerUser: (state, action) => {
      state.registerInfo = action.payload;
    },
    logoutUser: (state) => {
      state.userInfo = null;
      state.registerInfo = null;
      state.profileInfo = null;
    },
    getProfile: (state, action) => {
      state.profileInfo = action.payload;
    },
    updateProfile: (state, action) => {
      state.userInfo = action.payload;
      state.profileInfo = action.payload;
    },
    addExperience: (state, action) => {
      state.profileInfo.profile.experience.push(action.payload);
    },
    removeExperience: (state, action) => {
      const expIdToRemove = action.payload;
      state.profileInfo.profile.experience =
        state.profileInfo.profile.experience.filter(
          (exp) => exp.uuid !== expIdToRemove,
        );

      state.userInfo = {
        ...state.userInfo,
        profile: state.profileInfo.profile,
      };
    },
    addQualification: (state, action) => {
      state.profileInfo.profile.qualifications.push(action.payload);
    },
    removeQualification: (state, action) => {
      const qIdToRemove = action.payload;
      state.profileInfo.profile.qualifications =
        state.profileInfo.profile.qualifications.filter(
          (q) => q.uuid !== qIdToRemove,
        );

      state.userInfo = {
        ...state.userInfo,
        profile: state.profileInfo.profile,
      };
    },
  },
});

export const {
  loginUser,
  registerUser,
  logoutUser,
  getProfile,
  updateProfile,
  addExperience,
  removeExperience,
  addQualification,
  removeQualification,
} = authSlice.actions;

export default authSlice.reducer;


