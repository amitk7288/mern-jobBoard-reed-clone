import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state for jobs
const initialState = {
  jobDetails: null,
  jobResults: [],
  searchData: {
    whatVal: "",
    whereVal: "",
  },
  loading: false,
  error: null,
};

// Thunk to fetch job details by jobId
export const fetchJobById = createAsyncThunk(
  "jobs/fetchJobById",
  async (jobId) => {
    const response = await fetch(`/api/jobs/${jobId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch job details");
    }
    const data = await response.json();
    return data;
  },
);

export const searchJobsByCriteria = createAsyncThunk(
  "jobs/searchJobsByCriteria",
  async ({what, where}) => {
    const response = await fetch(`/api/search?keywords=${what}&location=${where}`);
    if (!response.ok) {
      throw new Error("Failed to fetch job details");
    }
    const data = await response.json();
    return data;
  },
);


// Job slice
const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchJobById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJobById.fulfilled, (state, action) => {
        state.loading = false;
        state.jobDetails = action.payload;
      })
      .addCase(fetchJobById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(searchJobsByCriteria.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchJobsByCriteria.fulfilled, (state, action) => {
        state.loading = false;
        state.jobResults = action.payload;
        const { what, where } = action.meta.arg;
        console.log("meta.arg:", action.meta.arg);

        state.searchData.whatVal = what || "";
        state.searchData.whereVal = where || "";
      })
      .addCase(searchJobsByCriteria.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default jobsSlice.reducer;
