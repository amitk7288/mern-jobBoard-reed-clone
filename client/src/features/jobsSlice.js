import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state for jobs
const initialState = {
  jobDetails: null,
  jobResults: [],
  filteredResults: [],
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
    salaryFilter: (state, action) => {
      const minSalary = action.payload;

      if (minSalary === 0) {
        state.filteredResults.results = [...state.jobResults.results];
        return;
      }

      state.filteredResults.results = state.jobResults.results.filter(
        (job) => job.minimumSalary >= minSalary,
      );
    },
    dateFilter: (state, action) => {
      const date = action.payload;

      const today = new Date();
      const todayStart = new Date(today.setHours(0, 0, 0, 0));

      if (date === "Anytime") {
        state.filteredResults = state.jobResults;
        return;
      }

      if (date === "Today") {
        state.filteredResults.results = state.jobResults.results.filter(
          (job) =>
            new Date(job.date.split("/").reverse().join("-")).toDateString() ===
            todayStart.toDateString(),
        );
        return;
      }

      if (date === "Last 3 days") {
        state.filteredResults.results = state.jobResults.results.filter(
          (job) =>
            new Date(job.date.split("/").reverse().join("-")).getTime() >=
            today.getTime() - 3 * 24 * 60 * 60 * 1000,
        );
        return;
      }

      if (date === "Last week") {
        state.filteredResults.results = state.jobResults.results.filter(
          (job) =>
            new Date(job.date.split("/").reverse().join("-")).getTime() >=
            today.getTime() - 7 * 24 * 60 * 60 * 1000,
        );
        return;
      }

      if (date === "Last 2 weeks") {
        state.filteredResults.results = state.jobResults.results.filter(
          (job) =>
            new Date(job.date.split("/").reverse().join("-")).getTime() >=
            today.getTime() - 14 * 24 * 60 * 60 * 1000,
        );
        return;
      }
    },
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
        state.filteredResults = action.payload;
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

export const { salaryFilter, dateFilter } = jobsSlice.actions;

export default jobsSlice.reducer;
