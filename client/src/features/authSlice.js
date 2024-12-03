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
    continueWithGoogle: (state, action) => {
      state.userInfo = action.payload;
      state.registerInfo = action.payload;
      state.profileInfo = action.payload;
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
    toggleSave: (state, action) => {
      const job = action.payload;

      const isAlreadySaved = state.profileInfo.profile.savedJobs.some(
        (savedJob) => savedJob.jobId === job.jobId,
      );

      if (isAlreadySaved) {
        state.profileInfo.profile.savedJobs = state.profileInfo.profile.savedJobs.filter(
          (savedJob) => savedJob.jobId !== job.jobId);
          console.log(`${job} removed`);
      } else {
        state.profileInfo.profile.savedJobs.push(job);
        console.log(`${job} added`);
      }
    },
    applyToJob: (state, action) => {
      const job = action.payload;

      const isAlreadyApplied = state.profileInfo.profile.appliedJobs.some(
        (appliedJob) => appliedJob.jobId === job.jobId,
      );

      if (isAlreadyApplied) {
        console.log("job already applied to");
        return;
      } else {
        state.profileInfo.profile.appliedJobs.push(job);
        console.log(`${job} applied`);
      }
    },
  },
});

export const {
  loginUser,
  registerUser,
  logoutUser,
  continueWithGoogle,
  getProfile,
  updateProfile,
  addExperience,
  removeExperience,
  addQualification,
  removeQualification,
  toggleSave,
  applyToJob,
} = authSlice.actions;

export default authSlice.reducer;


