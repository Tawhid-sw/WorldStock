import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ApiKey = import.meta.env.VITE_PEXELS_API_KEY;

const query = "new";
const perPage = 40;
const basePhotoUrl = "https://api.pexels.com/v1/curated?page=1&per_page=40";
const baseVideoUrl = `https://api.pexels.com/videos/search?query=${query}&per_page=${perPage}`;
export const FetchApi = createAsyncThunk("fetchData", async (mediyaType) => {
  const response = await axios.get(
    `${mediyaType === "Photos" ? basePhotoUrl : baseVideoUrl}`,
    {
      headers: {
        Authorization: ApiKey,
      },
    }
  );
  return response.data;
});

const ApiData = createSlice({
  name: "apiData",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(FetchApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(FetchApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(FetchApi.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.log("Error", action.error.message);
    });
  },
});

export default ApiData.reducer;
